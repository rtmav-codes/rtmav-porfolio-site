import type { Action } from 'svelte/action';

interface ScrollRevealOptions {
	delay?: number;
	duration?: number;
	easing?: string;
	threshold?: number;
	y?: number;
}

export const scrollReveal: Action<HTMLElement, ScrollRevealOptions | undefined> = (
	node,
	options = {}
) => {
	const {
		delay = 0,
		duration = 500,
		easing = 'cubic-bezier(0.16, 1, 0.3, 1)',
		threshold = 0.1,
		y = 30
	} = options;

	// Initial state - hidden
	node.style.opacity = '0';
	node.style.transform = `translateY(${y}px)`;
	node.style.willChange = 'opacity, transform';
	node.style.transition = `opacity ${duration}ms ${easing}, transform ${duration}ms ${easing}`;
	node.style.transitionDelay = `${delay}ms`;

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// Reveal
					node.style.opacity = '1';
					node.style.transform = 'translateY(0)';
					// Stop observing after reveal
					observer.unobserve(node);
				}
			});
		},
		{
			threshold,
			rootMargin: '0px'
		}
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
};

// Stagger animation for lists
export const staggerReveal: Action<HTMLElement, { staggerDelay?: number; childSelector?: string }> = (
	node,
	options = {}
) => {
	const { staggerDelay = 100, childSelector = ':scope > *' } = options;

	const children = node.querySelectorAll(childSelector);

	children.forEach((child, index) => {
		const el = child as HTMLElement;
		el.style.opacity = '0';
		el.style.transform = 'translateY(30px)';
		el.style.willChange = 'opacity, transform';
		el.style.transition = 'opacity 500ms cubic-bezier(0.16, 1, 0.3, 1), transform 500ms cubic-bezier(0.16, 1, 0.3, 1)';
		el.style.transitionDelay = `${index * staggerDelay}ms`;
	});

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					children.forEach((child) => {
						const el = child as HTMLElement;
						el.style.opacity = '1';
						el.style.transform = 'translateY(0)';
					});
					observer.unobserve(node);
				}
			});
		},
		{
			threshold: 0.1,
			rootMargin: '0px'
		}
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
};
