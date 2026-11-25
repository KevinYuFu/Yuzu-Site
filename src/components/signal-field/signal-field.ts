/**
 * Calm ambient field: a few faint horizontal lines drifting slowly and a
 * sprinkle of static, softly breathing specks. No tears, no flicker.
 * The loop stops when the tab is hidden; prefers-reduced-motion gets one
 * static frame.
 */
export function mountSignalField(canvas: HTMLCanvasElement) {
  if (canvas.dataset.mounted === '1') return;
  canvas.dataset.mounted = '1';

  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let width = 0;
  let height = 0;
  let frame = 0;
  let running = false;
  let last = 0;

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  }

  function hash(i: number) {
    let x = (i * 374761393 + 668265263) >>> 0;
    x = Math.imul(x ^ (x >>> 13), 1274126177);
    return x >>> 0;
  }

  function draw(time: number) {
    ctx!.clearRect(0, 0, width, height);
    const mobile = width < 760;
    const lines = mobile ? 2 : 4;
    const t = reduce ? 0 : time / 1000;

    for (let i = 0; i < lines; i++) {
      const base = ((i * 97 + 13) % 100) / 100;
      const drift = (t * (0.006 + i * 0.002)) % 1;
      const y = ((base + drift) % 1) * height;
      ctx!.globalAlpha = 0.05;
      ctx!.fillStyle = i % 2 === 0 ? '#01faff' : '#9a00ff';
      ctx!.fillRect(0, y, width, 1);
    }

    const specks = mobile ? 24 : 48;
    for (let i = 0; i < specks; i++) {
      const n = hash(i);
      const x = ((n % 4096) / 4096) * width;
      const y = (((n >>> 12) % 4096) / 4096) * height;
      const phase = (n % 628) / 100;
      ctx!.globalAlpha = 0.12 + 0.08 * Math.sin(t * 0.4 + phase);
      ctx!.fillStyle = i % 4 === 0 ? '#e0b0f8' : '#f8f0d0';
      ctx!.fillRect(x, y, 1, 1);
    }
    ctx!.globalAlpha = 1;
  }

  function loop(time: number) {
    if (!running) return;
    if (time - last > 50) {
      draw(time);
      last = time;
    }
    frame = requestAnimationFrame(loop);
  }

  function start() {
    if (running) return;
    running = true;
    if (reduce) {
      draw(0);
      running = false;
      return;
    }
    frame = requestAnimationFrame(loop);
  }

  function stop() {
    running = false;
    cancelAnimationFrame(frame);
  }

  resize();
  start();

  window.addEventListener('resize', () => {
    resize();
    if (reduce) draw(0);
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop();
    else start();
  });
}
