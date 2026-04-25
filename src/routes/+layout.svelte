<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import general from '$lib/data/general.js';
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';

	injectAnalytics({ mode: dev ? 'development' : 'production' });
</script>

<div class="min-h-screen bg-black">
	{@render children()}
</div>

<footer class="flex justify-center bg-black py-4">
	<p class="text-xs">
		© {new Date().getFullYear()}
		{general.name} | Made by
		<a href="https://port.rtmav.xyz" class="link" target="_blank" rel="noreferrer">~/rtmav_labs</a>
	</p>
</footer>
