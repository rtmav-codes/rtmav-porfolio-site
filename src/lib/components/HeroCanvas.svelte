<script>
	import { Canvas } from '@threlte/core';
	import AsciiTildeSlash from './AsciiTildeSlash.svelte';

	let { scrollProgress = 0 } = $props();
</script>

<div class="fixed inset-0 z-0">
	<Canvas>
		<AsciiTildeSlash {scrollProgress} />
	</Canvas>
</div>
