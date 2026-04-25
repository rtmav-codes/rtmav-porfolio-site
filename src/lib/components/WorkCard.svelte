<script>
	import { onMount } from 'svelte';

	let { title, company, image } = $props();

	let rotX = $state(0);
	let rotY = $state(0);
	let cardRef;
	
	let inView = $state(false);
	let displayedTitle = $state('');
	let displayedCompany = $state('');

	let companyString = $derived(`at ${company}`);

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
			if (!text) return resolve();
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
					await typeText(companyString, (val) => displayedCompany = val, 30);
				})();
			}
		}, { threshold: 0.2 });

		if (cardRef) observer.observe(cardRef);
		return () => observer.disconnect();
	});
</script>

<div style="perspective: 1000px;" class="w-full h-full">
	<div
		bind:this={cardRef}
		class="h-full flex w-full flex-row items-center justify-start overflow-hidden rounded-xl border border-white/20 bg-black/40 px-10 py-5 transition-transform duration-200 ease-out will-change-transform"
		style="transform: rotateX({rotX}deg) rotateY({rotY}deg);"
		onmousemove={handleMouseMove}
		onmouseleave={handleMouseLeave}
	>
		<div class="flex-center flex flex-row items-center justify-center">
			<div class="col-6 col-md-4 flex flex-col items-center justify-center p-0 transition-opacity duration-700 {inView ? 'opacity-100' : 'opacity-0'}">
				<img src={image?.url} width="144" height="144" class="border-radius ml-1 w-36 lg:ml-5" alt="" />
			</div>
			<div class="flex w-5/6 flex-col items-center justify-center">
				<div class="px-3 py-12">
					<strong class="text-ld lg:text-lg font-mono">
						{displayedTitle}<span class="animate-pulse" class:hidden={displayedTitle.length === title.length}>_</span><span class="invisible">{title.slice(displayedTitle.length)}</span>
					</strong>
					<p class="text-xs font-mono text-white/70">
						{displayedCompany}<span class="animate-pulse" class:hidden={displayedTitle.length < title.length || displayedCompany.length === companyString.length}>_</span><span class="invisible">{companyString.slice(displayedCompany.length)}</span>
					</p>
				</div>
			</div>
		</div>
	</div>
</div>