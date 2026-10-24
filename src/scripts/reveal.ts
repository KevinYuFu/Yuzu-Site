/** One-shot rise for blocks as they enter. No-op when motion is reduced. */
export function mountReveal() {
  if (document.documentElement.dataset.reveal === '1') return;
  document.documentElement.dataset.reveal = '1';

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const nodes = document.querySelectorAll<HTMLElement>('.reveal');
  if (!nodes.length || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );

  nodes.forEach((node) => observer.observe(node));
}
