/**
 * Tilts the home tile cluster toward a mouse or pen, and marks the tile
 * under the pointer so it can lift. Touch and reduced motion stay flat.
 * A `pointer: fine` media query is not required: some desktops still report
 * a coarse primary pointer while a mouse is hovering.
 */
export function mountHoloParallax(root: HTMLElement) {
  if (root.dataset.holo === '1') return;
  root.dataset.holo = '1';

  const cluster = root.querySelector<HTMLElement>('.holo-cluster');
  if (!cluster) return;

  const motionOk = window.matchMedia('(prefers-reduced-motion: no-preference)');
  const wide = window.matchMedia('(min-width: 801px)');

  const baseX = 6;
  const baseY = -8;
  let targetX = baseX;
  let targetY = baseY;
  let currentX = baseX;
  let currentY = baseY;
  let frame = 0;

  function canTilt() {
    return motionOk.matches && wide.matches;
  }

  function apply() {
    currentX += (targetX - currentX) * 0.14;
    currentY += (targetY - currentY) * 0.14;
    cluster!.style.transform =
      `rotateX(${currentX.toFixed(2)}deg) rotateY(${currentY.toFixed(2)}deg) scale(0.9)`;
    if (Math.abs(targetX - currentX) > 0.04 || Math.abs(targetY - currentY) > 0.04) {
      frame = requestAnimationFrame(apply);
    } else {
      frame = 0;
    }
  }

  function kick() {
    if (!canTilt()) return;
    if (!frame) frame = requestAnimationFrame(apply);
  }

  function slotFrom(target: EventTarget | null) {
    if (!(target instanceof Element)) return null;
    return target.closest<HTMLElement>('.holo-slot');
  }

  function clearHot(except?: HTMLElement | null) {
    cluster!.querySelectorAll<HTMLElement>('.is-hot').forEach((el) => {
      if (el !== except) el.classList.remove('is-hot');
    });
  }

  root.addEventListener('pointerover', (event) => {
    if (event.pointerType === 'touch') return;
    const slot = slotFrom(event.target);
    if (!slot) return;
    clearHot(slot);
    slot.classList.add('is-hot');
  });

  root.addEventListener('pointerout', (event) => {
    const slot = slotFrom(event.target);
    if (!slot) return;
    if (event.relatedTarget instanceof Node && slot.contains(event.relatedTarget)) return;
    slot.classList.remove('is-hot');
  });

  root.addEventListener('pointermove', (event) => {
    if (event.pointerType === 'touch' || !canTilt()) return;
    const rect = root.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    targetX = baseX - py * 6;
    targetY = baseY + px * 8;
    kick();
  });

  root.addEventListener('pointerleave', () => {
    clearHot();
    targetX = baseX;
    targetY = baseY;
    kick();
  });

  function sync() {
    if (canTilt()) return;
    cancelAnimationFrame(frame);
    frame = 0;
    cluster!.style.transform = '';
  }

  motionOk.addEventListener('change', sync);
  wide.addEventListener('change', sync);
}
