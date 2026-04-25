<script>
	import { useThrelte, useTask } from '@threlte/core';
	import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect.js';
	import { onMount, onDestroy } from 'svelte';

	let { 
		characters = ' .:-+*=%@#80db', 
		color = '#ffffff', 
		bgColor = 'transparent', 
		invert = false,
		resolution = 0.15 
	} = $props();

	const { renderer, scene, camera, size } = useThrelte();
	let effect;
	let parentNode;

	onMount(() => {
		// Initialize the AsciiEffect
		effect = new AsciiEffect(renderer, characters, { invert, resolution });
		effect.setSize(window.innerWidth, window.innerHeight);
		effect.domElement.style.position = 'absolute';
		effect.domElement.style.top = '0px';
		effect.domElement.style.left = '0px';
		effect.domElement.style.color = color;
		effect.domElement.style.backgroundColor = bgColor;
		effect.domElement.style.pointerEvents = 'none';
		effect.domElement.style.userSelect = 'none';
		effect.domElement.style.fontFamily = 'monospace';
		effect.domElement.style.overflow = 'hidden';

		// Append the ASCII <div> over the original canvas
		parentNode = renderer.domElement.parentNode;
		if (parentNode) {
			parentNode.appendChild(effect.domElement);
			renderer.domElement.style.opacity = '0'; // Hide the WebGL canvas
		}

		const handleResize = () => {
			effect.setSize(window.innerWidth, window.innerHeight);
		};
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
			if (parentNode && effect.domElement.parentNode === parentNode) {
				parentNode.removeChild(effect.domElement);
			}
			renderer.domElement.style.opacity = '1';
		};
	});

	// Hook into Threlte's render loop to render the ASCII effect
	useTask(() => {
		if (effect && camera.current) {
			effect.render(scene, camera.current);
		}
	}, { order: 10 }); // Run after the main updates
</script>
