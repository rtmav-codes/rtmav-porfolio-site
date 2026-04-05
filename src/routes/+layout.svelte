<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import general from "$lib/data/general.js";
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	injectAnalytics();
</script>

<div class="bg-black min-h-screen">
	{@render children()}
</div>

<footer class="flex justify-center py-4 bg-black">
    <p class="text-xs">© {new Date().getFullYear()} {general.name} | Made by <a href="https://port.rtmav.site" class="link" target="_blank" rel="noreferrer">~/rtmav_labs</a></p>
</footer>