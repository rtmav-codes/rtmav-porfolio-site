<script>
	import { onMount } from 'svelte';

	let rotX = $state(0);
	let rotY = $state(0);
	let cardRef;
	
	let inView = $state(false);
	let displayedTitle = $state('');
	let displayedDesc = $state('');
	
	const title = "Development";
	const description = "Need a website or app? I can do that! I also offer the option to include a Content Management System so that my clients can own their content and make website updates themselves whenever they want.";

	function handleMouseMove(e) {
		if (!cardRef) return;
		const rect = cardRef.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		const centerX = rect.width / 2;
		const centerY = rect.height / 2;
		rotX = ((y - centerY) / centerY) * -5;
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
				})();
			}
		}, { threshold: 0.2 });

		if (cardRef) observer.observe(cardRef);
		return () => observer.disconnect();
	});
</script>

<div style="perspective: 1000px;" class="w-full">
	<div
		bind:this={cardRef}
		class="rounded-xl border border-white/20 bg-black/40 px-10 py-10 lg:py-10 transition-transform duration-200 ease-out will-change-transform"
		style="transform: rotateX({rotX}deg) rotateY({rotY}deg);"
		onmousemove={handleMouseMove}
		onmouseleave={handleMouseLeave}
	>
		<div class="flex flex-col">
			<div class="mb-2 flex flex-row items-center justify-start transition-opacity duration-500 {inView ? 'opacity-100' : 'opacity-0'}">
				<img src="/code.png" class="w-8" alt="" />
				<h1 class="ml-3 text-lg font-semibold font-mono">
					{displayedTitle}<span class="animate-pulse" class:hidden={displayedTitle.length === title.length}>_</span><span class="invisible">{title.slice(displayedTitle.length)}</span>
				</h1>
			</div>
			<p class="text-sm font-mono text-white/70">
				{displayedDesc}<span class="animate-pulse" class:hidden={displayedTitle.length < title.length || displayedDesc.length === description.length}>_</span><span class="invisible">{description.slice(displayedDesc.length)}</span>
			</p>
		</div>
	</div>
</div>