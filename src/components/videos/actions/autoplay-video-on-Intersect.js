export function autoplayVideoOnIntersect(node, autoplay) {
  let observer = null;
  let prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* '-50%' intercept when the item is half way up the screen */
  let options = {
    root: null,
    rootMargin: "-50% 0px -50% 0px",
  };

  let onEnterScreen = (entries) => {
    let { isIntersecting } = entries[0];

    if (isIntersecting && !prefersReducedMotion && autoplay) {
      node.play();
      observer.unobserve(node);
    }
  };

  if (typeof IntersectionObserver !== "undefined") {
    observer = new IntersectionObserver(onEnterScreen, options);

    observer.observe(node);
  }

  return {
    destroy() {
      if (observer !== null) {
        observer.unobserve(node);
      }
    },
  };
}
