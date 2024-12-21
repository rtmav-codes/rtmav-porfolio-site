<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import general from "$lib/data/general.js";
</script>

{@render children()}

<footer class="flex justify-center py-4 bg-black">
    <p class="text-xs">© {new Date().getFullYear()} {general.name} | Made by <a href="https://port.rtmav.site" class="link" target="_blank" rel="noreferrer">~/rtmav_labs</a></p>
</footer>