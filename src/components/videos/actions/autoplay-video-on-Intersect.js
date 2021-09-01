export function autoplayVideoOnIntersect(node, autoplay) {
  let observer = null;
  let prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  let shouldAutoPlay = autoplay;

  /* '-50%' intercept when the item is half way up the screen */
  let options = {
    root: null,
    rootMargin: "-50% 0px -50% 0px",
  };

  let onEnterScreen = (entries) => {
    let { isIntersecting } = entries[0];

    if (isIntersecting && !prefersReducedMotion && shouldAutoPlay) {
      let startPlayPromise = node.play();

      if (startPlayPromise !== undefined) {
        startPlayPromise
          .then(() => {
            // Playback has begun, we can stop
            // observing the video element.
            observer.unobserve(node);
          })
          .catch((error) => {
            if (error.name === "NotAllowedError") {
              console.log("Video autoplay not allowed.");
            } else {
              console.log(error);
            }
          });
      }
    }
  };

  if (typeof IntersectionObserver !== "undefined") {
    observer = new IntersectionObserver(onEnterScreen, options);

    observer.observe(node);
  }

  return {
    update(newAutoplay) {
      // the value of `autoplay` has changed
      shouldAutoPlay = newAutoplay;
    },

    destroy() {
      if (observer !== null) {
        observer.unobserve(node);
      }
    },
  };
}
