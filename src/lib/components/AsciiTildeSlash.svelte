<script>
	import { T, useTask, useThrelte } from '@threlte/core';
	import { Float } from '@threlte/extras';
	import * as THREE from 'three';
	import AsciiRenderer from './AsciiRenderer.svelte';
	import { onMount } from 'svelte';

	let { scrollProgress = 0 } = $props();
	const { camera } = useThrelte();

	// References for direct mutation (bypasses Svelte 5 reactivity for 60fps performance)
	let groupRef = $state();
	let starsRef = $state();

	// Reactive rotation states for Threlte bindings
	let rotX = $state(0);
	let rotY = $state(0);
	let sRot = $state(0);

	// Smooth camera movement
	let currentZ = 20;
	let targetZ = 20;
	
	let currentRotationX = 0;
	let currentRotationY = 0;
	let targetRotationX = 0;
	let targetRotationY = 0;
	let autoSpin = 0;

	// Drag interaction state
	let isDragging = false;
	let previousMouseX = 0;
	let previousMouseY = 0;

	onMount(() => {
		const onPointerDown = (e) => {
			isDragging = true;
			previousMouseX = e.clientX;
			previousMouseY = e.clientY;
			// Prevent default to stop any text selection/drag interference
			if (e.cancelable) e.preventDefault();
		};

		const onPointerMove = (e) => {
			if (isDragging) {
				const deltaX = e.clientX - previousMouseX;
				const deltaY = e.clientY - previousMouseY;
				
				targetRotationY += deltaX * 0.01;
				targetRotationX += deltaY * 0.01;
				
				previousMouseX = e.clientX;
				previousMouseY = e.clientY;
			}
		};

		const onPointerUp = () => {
			isDragging = false;
		};

		window.addEventListener('pointerdown', onPointerDown);
		window.addEventListener('pointermove', onPointerMove);
		window.addEventListener('pointerup', onPointerUp);

		return () => {
			window.removeEventListener('pointerdown', onPointerDown);
			window.removeEventListener('pointermove', onPointerMove);
			window.removeEventListener('pointerup', onPointerUp);
		};
	});

	useTask((delta) => {
		// Fly through on scroll
		targetZ = 20 - (scrollProgress * 25);
		currentZ += (targetZ - currentZ) * delta * 5;
		
		if (camera.current) {
			camera.current.position.z = currentZ;
		}
		
		// Auto rotations
		if (!isDragging) {
			autoSpin += delta * 0.2; 
		}
		
		// Smoothly interpolate current rotation toward the target
		currentRotationX += (targetRotationX - currentRotationX) * delta * 5;
		currentRotationY += (targetRotationY - currentRotationY) * delta * 5;

		// Bind to Svelte reactive state (bulletproof update)
		rotX = currentRotationX;
		rotY = autoSpin + currentRotationY;
	});

	const tildeCurve = new THREE.CatmullRomCurve3([
		new THREE.Vector3(-4, -0.5, 0),
		new THREE.Vector3(-2.5, 1.2, 0),
		new THREE.Vector3(-0.5, -1.2, 0),
		new THREE.Vector3(1, 0.5, 0),
	]);
</script>

<AsciiRenderer characters="        .:-+*=%@#80db" color="#ffffff" invert={false} />

<T.PerspectiveCamera makeDefault position={[0, 0, 20]} fov={50} />

<!-- High contrast lighting. Kept <= 1.0 total scene brightness so we don't blow out the AsciiEffect -->
<T.AmbientLight intensity={0.2} />
<T.DirectionalLight position={[0, 0, 15]} intensity={0.8} />

<!-- Floating ~/ Shape -->
<Float speed={2} rotationIntensity={0.1} floatIntensity={0.5}>
	<T.Group rotation={[rotX, rotY, 0]}>
		
		<T.Mesh position={[-1.5, 1, 0]}>
			<!-- Increased tube radius from 0.6 to 1.3 to make it much thicker/filled -->
			<T.TubeGeometry args={[tildeCurve, 64, 1.3, 32, false]} />
			<T.MeshStandardMaterial color="#ffffff" roughness={0.6} metalness={0.1} />
		</T.Mesh>

		<T.Mesh position={[3, 0, 0]} rotation={[0, 0, -0.4]}>
			<!-- Increased cylinder radius from 0.5 to 1.1 -->
			<T.CylinderGeometry args={[1.1, 1.1, 7, 32]} />
			<T.MeshStandardMaterial color="#ffffff" roughness={0.6} metalness={0.1} />
		</T.Mesh>

	</T.Group>
</Float>
