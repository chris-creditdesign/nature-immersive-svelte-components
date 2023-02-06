export function fadeInOnIntersect(node: HTMLElement) {
	let observer: IntersectionObserver | null = null;

	/* '-50%' intercept when the item is half way up the screen */
	let options = {
		root: null,
		rootMargin: '0px 0px 0px 0px'
	};

	let onEnterScreen = (entries: IntersectionObserverEntry[]) => {
		let { isIntersecting } = entries[0];

		if (isIntersecting && observer) {
			node.classList.remove('text-opacity:zero');
			observer.unobserve(node);
		}
	};

	if (typeof IntersectionObserver !== 'undefined') {
		observer = new IntersectionObserver(onEnterScreen, options);

		observer.observe(node);
	}

	return {
		destroy() {
			if (observer !== null) {
				observer.unobserve(node);
			}
		}
	};
}
