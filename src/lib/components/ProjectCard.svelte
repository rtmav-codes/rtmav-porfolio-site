<script>
	import { onMount } from 'svelte';

	let { title, description, image, demoUrl } = $props();

	let rotX = $state(0);
	let rotY = $state(0);
	let cardRef;
	
	let inView = $state(false);
	let displayedTitle = $state('');
	let displayedDesc = $state('');
	let showLink = $state(false);

	function handleMouseMove(e) {
		if (!cardRef) return;
		const rect = cardRef.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		
		const centerX = rect.width / 2;
		const centerY = rect.height / 2;
		
		rotX = ((y - centerY) / centerY) * -5; // Subtle 5deg tilt
		rotY = ((x - centerX) / centerX) * 5;
	}

	function handleMouseLeave() {
		rotX = 0;
		rotY = 0;
	}

	function typeText(text, callback, speed = 30) {
		return new Promise((resolve) => {
			let i = 0;
			function type() {
				if (i < text.length) {
					callback(text.slice(0, i + 1));
					i++;
					setTimeout(type, speed);
				} else {
					resolve();
				}
			}
			type();
		});
	}

	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting && !inView) {
				inView = true;
				observer.disconnect();
				
				(async () => {
					await typeText(title, (val) => displayedTitle = val, 40);
					await typeText(description, (val) => displayedDesc = val, 20);
					showLink = true;
				})();
			}
		}, { threshold: 0.2 });

		if (cardRef) {
			observer.observe(cardRef);
		}

		return () => observer.disconnect();
	});
</script>

<div style="perspective: 1000px;" class="mb-5 w-full">
	<div
		bind:this={cardRef}
		class="h-100 group relative flex flex-col items-center justify-start overflow-hidden rounded-xl border border-white/20 bg-black/40 p-10 lg:flex-row transition-transform duration-200 ease-out will-change-transform"
		style="transform: rotateX({rotX}deg) rotateY({rotY}deg);"
		onmousemove={handleMouseMove}
		onmouseleave={handleMouseLeave}
		role="region"
		aria-label={title}
	>
		<div class="relative z-10 flex flex-col items-center justify-start lg:flex-row w-full">
			<div class="flex w-full flex-col items-center justify-start lg:w-1/4">
				<div class="mt-5 flex flex-col items-start justify-start lg:mt-0">
					<img
						src={image?.url}
						class="h-auto w-72 rounded-lg border border-white"
						alt={title}
					/>
				</div>
			</div>
			<div class="my-5 w-full lg:my-0 lg:w-3/4 lg:pl-10">
				<h1 class="mb-2 text-lg font-semibold lg:text-xl font-mono">
					{displayedTitle}<span class="animate-pulse" class:hidden={displayedTitle.length === title.length}>_</span><span class="invisible">{title.slice(displayedTitle.length)}</span>
				</h1>
				<p class="mb-2 text-xs lg:text-sm font-mono text-white/70">
					{displayedDesc}<span class="animate-pulse" class:hidden={displayedTitle.length < title.length || displayedDesc.length === description.length}>_</span><span class="invisible">{description.slice(displayedDesc.length)}</span>
				</p>

				{#if demoUrl}
					<div class="mt-4 transition-opacity duration-500 {showLink ? 'opacity-100' : 'opacity-0'}">
						<a
							href={demoUrl}
							target="_blank"
							class="link font-bold transition-colors duration-200 hover:text-gray-300 font-mono uppercase text-xs tracking-widest"
							rel="noreferrer">[ View Project ]</a
						>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>