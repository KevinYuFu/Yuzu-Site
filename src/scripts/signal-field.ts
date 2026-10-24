/**
 * Cheap full-viewport signal noise: a few tear bars and specks.
 * Internal resolution stays at CSS pixels. The loop stops when the tab is
 * hidden, and prefers-reduced-motion gets a single static frame.
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

  function speck(i: number, tick: number) {
    let x = (i * 374761393 + tick * 668265263) >>> 0;
    x = Math.imul(x ^ (x >>> 13), 1274126177);
    return x >>> 0;
  }

  function draw(time: number) {
    ctx!.clearRect(0, 0, width, height);
    const mobile = width < 760;
    const bars = mobile ? 4 : 7;
    const tick = reduce ? 0 : Math.floor(time / 140);

    for (let i = 0; i < bars; i++) {
      const base = ((i * 97 + 13) % 100) / 100;
      const drift = reduce ? 0 : ((time / 1000) * (16 + i * 9)) % 1;
      const y = ((base + drift) % 1) * height;
      ctx!.globalAlpha = 0.16;
      ctx!.fillStyle = i % 2 === 0 ? '#ff2b56' : '#01faff';
      ctx!.fillRect(0, y, width, 1 + (i % 3));

      if (!reduce && i % 2 === 0) {
        ctx!.globalAlpha = 0.09;
        ctx!.fillStyle = '#9a00ff';
        const band = 36 + ((i * 53) % 140);
        const x = ((time / 28 + i * 160) % (width + band)) - band;
        ctx!.fillRect(x, y - 6, band, 8);
      }
    }

    const specks = mobile ? 36 : 70;
    for (let i = 0; i < specks; i++) {
      const n = speck(i, tick);
      const x = (n % 4096) / 4096 * width;
      const y = ((n >>> 12) % 4096) / 4096 * height;
      ctx!.globalAlpha = 0.45;
      ctx!.fillStyle = i % 4 === 0 ? '#e0b0f8' : '#f8f0d0';
      ctx!.fillRect(x, y, 1, 1);
    }
    ctx!.globalAlpha = 1;
  }

  function loop(time: number) {
    if (!running) return;
    if (time - last > 33) {
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
