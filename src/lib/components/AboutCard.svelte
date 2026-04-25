<script>
	import { onMount } from 'svelte';

	let { general } = $props();

	let rotX = $state(0);
	let rotY = $state(0);
	let cardRef;
	
	let inView = $state(false);
	let displayedName = $state('');
	let displayedDesc = $state('');
	let showExtras = $state(false);

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
					await typeText(general?.name || '', (val) => displayedName = val, 40);
					await typeText(general?.introDescription || '', (val) => displayedDesc = val, 20);
					showExtras = true;
				})();
			}
		}, { threshold: 0.1 });

		if (cardRef) observer.observe(cardRef);
		return () => observer.disconnect();
	});

	let nameText = $derived(general?.name || '');
	let descText = $derived(general?.introDescription || '');
</script>

<div style="perspective: 1000px;" class="mb-5 w-full">
	<div
		bind:this={cardRef}
		class="flex flex-col items-center justify-center rounded-xl border border-white/20 bg-black/40 p-5 transition-transform duration-200 ease-out will-change-transform"
		style="transform: rotateX({rotX}deg) rotateY({rotY}deg);"
		onmousemove={handleMouseMove}
		onmouseleave={handleMouseLeave}
	>
		<!-- Avatar -->
		<div class="flex items-center justify-center transition-opacity duration-700 {inView ? 'opacity-100' : 'opacity-0'}">
			<img
				src={general?.avatar?.url}
				class="mb-5 w-36 rounded-full border-2 border-white"
				width="144"
				height="144"
				alt="Avatar"
			/>
		</div>

		<!-- Name + description -->
		<div class="flex flex-col items-center justify-center px-0 text-center lg:items-start lg:px-4 lg:text-left">
			<h1 class="mb-3 text-center text-2xl font-semibold lg:text-left font-mono">
				{displayedName}<span class="animate-pulse" class:hidden={displayedName.length === nameText.length}>_</span><span class="invisible">{nameText.slice(displayedName.length)}</span>
			</h1>
			<p class="mb-5 text-sm font-mono text-white/70">
				{displayedDesc}<span class="animate-pulse" class:hidden={displayedName.length < nameText.length || displayedDesc.length === descText.length}>_</span><span class="invisible">{descText.slice(displayedDesc.length)}</span>
			</p>
		</div>

		<!-- Socials -->
		<div class="flex w-full flex-row items-center justify-center lg:items-start lg:justify-start lg:px-4 transition-opacity duration-500 {showExtras ? 'opacity-100' : 'opacity-0'}">
			<div class="mb-2 flex flex-col items-center justify-center py-2 lg:flex-row">
				{#if general?.twitter}
					<button class="btn btn-outline mb-3 flex h-10 w-auto flex-col justify-center rounded-md hover:bg-gray-700 hover:text-white">
						<a class="flex flex-row items-center justify-center text-xs font-semibold text-white" href={general?.twitter} target="_blank" rel="noreferrer">
							<img src="/twitter.png" class="mb-1 h-5 w-5" width="20" height="20" alt="twitter logo" />
							<span class="ml-3">Twitter</span>
						</a>
					</button>
				{/if}

				{#if general?.gitHub}
					<button class="btn btn-outline mb-3 ml-2 flex h-10 w-auto flex-col justify-center rounded-md hover:bg-gray-700 hover:text-white">
						<a class="flex flex-row items-center justify-center text-xs font-semibold text-white" href={general?.gitHub} target="_blank" rel="noreferrer">
							<img class="mb-1 h-5 w-5" src="/github.svg" width="20" height="20" alt="github icon" />
							<span class="ml-3">GitHub</span>
						</a>
					</button>
				{/if}

				{#if general?.email}
					<button class="btn btn-outline mb-3 ml-2 flex h-10 w-auto flex-row justify-center rounded-md hover:bg-gray-700 hover:text-white">
						<a class="flex flex-row items-center justify-center text-xs font-semibold text-white" href="mailto:{general?.email}">
							<img class="w-5" src="/email-white.svg" width="20" height="20" alt="email icon" />
							<span class="ml-3 mr-1">{general?.email}</span>
						</a>
					</button>
				{/if}

				{#if general?.resume}
					<button class="btn btn-outline mb-3 ml-2 flex h-10 w-auto flex-col justify-center rounded-md hover:bg-gray-700 hover:text-white">
						<a class="flex flex-row items-center justify-center text-xs font-semibold text-white" href={general?.resume?.url} target="_blank" rel="noreferrer">
							<img class="mb-1 w-5" src="/resume.svg" width="20" height="20" alt="resume icon" />
							<span class="ml-2 mr-1">Resume</span>
						</a>
					</button>
				{/if}
			</div>
		</div>
	</div>
</div>