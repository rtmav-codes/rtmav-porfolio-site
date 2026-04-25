<script lang="ts">
	import { Hamburger } from 'svelte-hamburgers';
	import Menu from './Menu.svelte';

	let open: boolean = false;
</script>

<div class="flex items-center justify-center bg-black pt-4 font-mono">
	<Hamburger bind:open --color="white" />
</div>

<Menu bind:open />

<div
	class="flex h-auto w-screen flex-col items-center justify-center bg-black px-5 font-mono lg:px-0"
>
	<!-- Header Image placeholder -->
	<div class="flex flex-col items-center justify-center">
		<!-- Add your logo in the static/work folder later -->
		<!-- <img src="/work/evoq-logo.png" class="w-36 mt-10" alt="Evoq AI logo" /> -->
	</div>

	<!-- Title -->
	<h1 class="mt-10 text-center text-5xl text-white">Evoq AI</h1>
	<h2 class="mt-2 text-center text-2xl text-white">
		AI-Powered Hair Stylist Consultation & Management Platform
	</h2>

	<!-- Content -->
	<div class="mb-20 mt-10 flex w-full flex-col lg:w-3/4">
		<div
			class="flex flex-col items-center justify-center rounded-xl border bg-black
        px-6 py-10 lg:px-10 lg:py-10"
		>
			<div class="flex w-5/6 flex-col items-start justify-start">
				<h1 class="text-md font-semibold text-white lg:text-xl">My Role: Full Stack Developer</h1>

				<h2 class="text-md mt-8 font-semibold text-white lg:text-lg">Project Overview:</h2>
				<p class="text-md mt-2 text-white">
					Evoq AI is a comprehensive AI platform split across a dynamic user interface and a robust
					administration dashboard. I engineered both the client-facing application and the
					full-stack management dashboard to deliver a seamless, scalable, and secure experience for
					users and administrators. The frontend provides a fast, edge-compatible application, while
					the backend management interface handles user provisioning, metrics, and security.
				</p>

				<h2 class="mt-8 text-lg font-semibold text-white">Technology Stack & Architecture:</h2>
				<p class="text-md mt-2 text-white">
					<strong>Evoq AI User Interface:</strong> Built with Svelte 5, Vite, and Tailwind CSS v4 to
					provide a high-performance, highly responsive client. The app integrates Google Generative
					AI for core functionality, relies on Neon Serverless PostgreSQL for flexible database operations,
					and uses AWS S3 for media storage.
				</p>
				<p class="text-md mt-4 text-white">
					<strong>Evoq AI Dashboard:</strong> A full-stack administration application developed using
					SvelteKit. It leverages the Prisma ORM for database schemas, and Chart.js to visualize usage
					patterns and operational metrics.
				</p>
				<p class="text-md mt-4 text-white">
					<strong>Advanced Integrations:</strong> To push the boundaries of user experience and security,
					the platform was built with Google Anti Gravity for fluid, gravity-defying interactions and
					seamlessly integrates Firebase Auth for reliable, scalable user authentication.
				</p>

				<h2 class="mt-8 text-lg font-semibold text-white">Key Features & Achievements:</h2>
				<ul class="text-md mt-2 list-inside list-disc space-y-2 text-white">
					<li>Engineered a high-performance Svelte 5 client for responsive AI interactions.</li>
					<li>
						Integrated Google GenAI APIs to power the core artificial intelligence experiences.
					</li>
					<li>
						Developed a secure, Prisma-backed SvelteKit dashboard for system analytics and
						administration.
					</li>
					<li>Implemented resilient authentication workflows across the platform via Auth.js.</li>
					<li>
						Designed scalable cloud architectures utilizing Neon Serverless Postgres and AWS S3
						storage.
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
