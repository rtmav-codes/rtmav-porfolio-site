<script lang="ts">
	import general from '$lib/data/general.js';
	import media from '$lib/data/media.js';
	import works from '$lib/data/works.js';
	import featuredProjects from '$lib/data/featured-projects.js';
	import { scrollReveal, staggerReveal } from '$lib/actions/scrollReveal';
	import HeroCanvas from '$lib/components/HeroCanvas.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import AboutCard from '$lib/components/AboutCard.svelte';
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import WorkCard from '$lib/components/WorkCard.svelte';
	import { onMount } from 'svelte';

	const mediaCol1 = media
		.filter(({ column }) => column === 1)
		.sort(({ order: a = 0 }, { order: b = 0 }) => (a > b ? 1 : -1));
	const mediaCol2 = media
		.filter(({ column }) => column === 2)
		.sort(({ order: a = 0 }, { order: b = 0 }) => (a > b ? 1 : -1));
	const mediaCol3 = media
		.filter(({ column }) => column === 3)
		.sort(({ order: a = 0 }, { order: b = 0 }) => (a > b ? 1 : -1));

	let entered = $state(false);
	let scrollY = $state(0);
	let windowHeight = $state(1);

	// CSS Stars generation
	let stars = $state<{id: number, left: number, top: number, delay: number, duration: number}[]>([]);

	let scrollProgress = $derived(Math.min(Math.max(scrollY / windowHeight, 0), 1));

	function handleEnter() {
		entered = true;
		window.scrollTo(0, 0);
		document.body.style.overflow = 'auto';
	}

	onMount(() => {
		document.body.style.overflow = 'hidden';
		windowHeight = window.innerHeight;

		// Generate 100 CSS stars completely independent of WebGL
		let newStars = [];
		for(let i=0; i<100; i++) {
			newStars.push({
				id: i,
				left: Math.random() * 100,
				top: Math.random() * 100,
				delay: Math.random() * 5,
				duration: 2 + Math.random() * 3
			});
		}
		stars = newStars;
	});
</script>

<svelte:window bind:scrollY bind:innerHeight={windowHeight} />

<!-- The 3D Background that reacts to scroll -->
<HeroCanvas {scrollProgress} />

<!-- CSS Starfield (Guaranteed perfect `*`s) -->
<div class="fixed inset-0 z-0 pointer-events-none overflow-hidden">
	{#each stars as star (star.id)}
		<div 
			class="absolute text-white font-mono text-sm opacity-0 animate-[twinkle_var(--dur)_infinite]"
			style="
				left: {star.left}%; 
				top: {star.top}%; 
				animation-delay: {star.delay}s;
				--dur: {star.duration}s;
			"
		>
			*
		</div>
	{/each}
</div>

<!-- OVERLAY: The "Enter" / Loading Screen (Black & White, Monospace) -->
{#if !entered}
	<div
		class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black font-mono text-white transition-opacity duration-1000"
	>
		<h1 class="mb-8 text-3xl font-bold uppercase tracking-widest">[Welcome to RTMAV_LABS]</h1>
		<button
			onclick={handleEnter}
			class="btn btn-outline rounded-md px-8 py-2 text-sm uppercase tracking-widest transition-colors hover:bg-white hover:text-black"
		>
			Enter
		</button>
	</div>
{/if}

<!-- MAIN CONTENT WRAPPER -->
<div
	class="relative z-10 w-full font-mono text-white"
	class:opacity-0={!entered}
	class:pointer-events-none={!entered}
>
	<!-- Hero Section (100vh spacer for the fly-through). -->
	<section class="pointer-events-none flex h-screen flex-col items-center justify-center relative">
		<div
			class="absolute bottom-12 flex animate-bounce flex-col items-center transition-opacity duration-300"
			class:opacity-0={scrollProgress > 0.05}
			class:opacity-80={scrollProgress <= 0.05}
		>
			<span class="mb-4 block text-xs uppercase tracking-widest text-white">Scroll Down</span>
			<!-- Down Arrow SVG -->
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-8 w-8 text-white"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1.5"
					d="M19 14l-7 7m0 0l-7-7m7 7V3"
				/>
			</svg>
		</div>
	</section>

	<!-- Original Portfolio Content -->
	<section
		class="relative z-20 min-h-screen border-t border-white/20 bg-black/40 p-5 backdrop-blur-sm"
	>
		<div class="flex flex-col items-center justify-center pb-5">
			<div class="flex w-full flex-col lg:w-3/4">
				<!-- About -->
				<div class="col-12 mb-5 flex flex-col" use:scrollReveal={{ delay: 0, y: 20 }}>
					<AboutCard {general} />
				</div>

				<!-- Services -->
				<div class="flex flex-col" use:scrollReveal={{ y: 20 }}>
					<h1 class="mb-3 text-2xl font-bold">Services</h1>
				</div>

				<!-- Development Services -->
				<div class="col-12 flex flex-col" use:scrollReveal={{ delay: 100, y: 25 }}>
					<ServiceCard />
				</div>

				<!-- Work Experience -->
				{#if general?.id === 'clbucvbhetqmq0alraz7sbmtz'}
					<div class="col-12 mt-5 flex flex-col px-5 lg:px-0" use:scrollReveal={{ y: 20 }}>
						<h1 class="mb-3 text-2xl font-bold">Work Experience</h1>
					</div>
					<div
						class="grid grid-cols-1 gap-4 lg:grid-cols-2"
						use:staggerReveal={{ staggerDelay: 150 }}
					>
						{#each works as { title, company, image }}
							<WorkCard {title} {company} {image} />
						{:else}
							<p class="text-sm">No work experience loaded.</p>
						{/each}
					</div>
				{/if}

				<!-- Recent Projects -->
				<h2 class="mb-3 mt-5 text-2xl font-bold" use:scrollReveal={{ y: 20 }}>Recent Projects</h2>
				<div use:staggerReveal={{ staggerDelay: 200 }}>
					{#each featuredProjects as { title, description, image, demoUrl }}
						<ProjectCard {title} {description} {image} {demoUrl} />
					{:else}
						<p class="text-sm">No recent projects loaded.</p>
					{/each}
				</div>

				<!-- Contact -->
				<h1 class="mb-3 mt-5 text-2xl font-bold" use:scrollReveal={{ y: 20 }}>CONTACT</h1>

				<div
					class="mb-5 rounded-xl border border-white px-4 py-8 lg:mx-auto lg:mb-5 lg:py-16"
					use:scrollReveal={{ delay: 100, y: 30 }}
				>
					<div class="flex flex-col items-center justify-center p-10">
						<p class="mb-8 text-center font-light text-white sm:text-xl lg:mb-16">
							Have a question for our team? Feel free to read out and we will get back to you as
							soon as possible!
						</p>
						<form
							target="_blank"
							action="https://formsubmit.co/rotem.avisar@gmail.com"
							method="POST"
							class="w-full"
						>
							<div class="form-group">
								<div class="form-row">
									<label for="email" class="block text-sm font-bold">Your email</label>
									<input
										type="email"
										name="email"
										class="focus:ring-primary-500 focus:border-primary-500 form-control block w-full
									rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm
									text-gray-900 shadow-sm"
										placeholder="name@email.com"
										required
									/>
								</div>
								<div class="form-row">
									<label for="subject" class="block pt-2 text-sm font-bold">Subject</label>
									<input
										type="text"
										name="subject"
										class="focus:ring-primary-500 focus:border-primary-500 form-control block w-full rounded-lg
									border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900
									shadow-sm"
										placeholder="Let us know how we can help you"
										required
									/>
								</div>
								<div class="form-row sm:col-span-2">
									<label for="message" class="block pt-2 text-sm font-bold">Your message</label>
									<textarea
										name="message"
										rows="6"
										class="focus:ring-primary-500 focus:border-primary-500 form-control block w-full rounded-lg
									 border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900
									 shadow-sm"
										placeholder="Leave a comment..."
									>
									</textarea>
								</div>
								<button
									type="submit"
									class="focus:ring-primary-300 mt-5 rounded-lg bg-white px-5 py-3 text-center
								text-sm font-semibold text-gray-900 hover:bg-gray-500 focus:outline-none focus:ring-4 sm:w-fit"
								>
									Send message
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
