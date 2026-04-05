<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;
	let animationId: number;
	let nodes: Node[] = [];
	let draggedNode: Node | null = null;
	let isDragging = false;
	let dragStartTime = 0;
	let frameCount = 0;

	interface Node {
		x: number;
		y: number;
		vx: number;
		vy: number;
		radius: number;
		opacity: number;
		pulsePhase: number;
		id: number;
		isDragging?: boolean;
	}

	const CONFIG = {
		nodeCount: 80,
		connectionDistance: 150,
		maxConnections: 3,
		nodeRadius: { min: 2, max: 4 },
		nodeOpacity: { min: 0.5, max: 0.9 },
		lineOpacity: { min: 0.15, max: 0.4 },
		driftSpeed: 0.2,
		pulseSpeed: 0.02,
		nodeColor: { r: 180, g: 180, b: 180 },
		lineColor: { r: 160, g: 160, b: 160 },
		dragThreshold: 5,
		clickThreshold: 200
	};

	let nodeIdCounter = 0;

	function createNode(x?: number, y?: number): Node {
		const rect = canvas?.getBoundingClientRect();
		const node: Node = {
			x: x ?? Math.random() * (rect?.width || window.innerWidth),
			y: y ?? Math.random() * (rect?.height || window.innerHeight),
			vx: (Math.random() - 0.5) * CONFIG.driftSpeed,
			vy: (Math.random() - 0.5) * CONFIG.driftSpeed,
			radius: CONFIG.nodeRadius.min + Math.random() * (CONFIG.nodeRadius.max - CONFIG.nodeRadius.min),
			opacity: CONFIG.nodeOpacity.min + Math.random() * (CONFIG.nodeOpacity.max - CONFIG.nodeOpacity.min),
			pulsePhase: Math.random() * Math.PI * 2,
			id: nodeIdCounter++,
			isDragging: false
		};
		return node;
	}

	function initNodes() {
		nodes = [];
		nodeIdCounter = 0;
		for (let i = 0; i < CONFIG.nodeCount; i++) {
			nodes.push(createNode());
		}
		console.log(`[NeuralNetwork] Initialized ${nodes.length} nodes`);
	}

	function resizeCanvas() {
		if (!canvas) return;
		const dpr = window.devicePixelRatio || 1;
		const rect = canvas.getBoundingClientRect();
		canvas.width = rect.width * dpr;
		canvas.height = rect.height * dpr;
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.scale(dpr, dpr);
	}

	function getDistance(a: { x: number; y: number }, b: { x: number; y: number }): number {
		return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
	}

	function findNodeAt(x: number, y: number): Node | null {
		const clickRadius = 15;
		for (const node of nodes) {
			if (getDistance(node, { x, y }) < clickRadius) {
				return node;
			}
		}
		return null;
	}

	function draw() {
		if (!ctx || !canvas) return;
		const rect = canvas.getBoundingClientRect();
		
		ctx.clearRect(0, 0, rect.width, rect.height);

		// Update nodes (only drift if not dragging)
		nodes.forEach(node => {
			if (!node.isDragging) {
				node.x += node.vx;
				node.y += node.vy;

				if (node.x < 0 || node.x > rect.width) node.vx *= -1;
				if (node.y < 0 || node.y > rect.height) node.vy *= -1;

				node.x = Math.max(0, Math.min(rect.width, node.x));
				node.y = Math.max(0, Math.min(rect.height, node.y));
			}
			node.pulsePhase += CONFIG.pulseSpeed;
		});

		// Draw connections
		nodes.forEach((node, i) => {
			let connections = 0;
			for (let j = i + 1; j < nodes.length && connections < CONFIG.maxConnections; j++) {
				const other = nodes[j];
				const dist = getDistance(node, other);
				
				if (dist < CONFIG.connectionDistance) {
					const opacity = CONFIG.lineOpacity.max * (1 - dist / CONFIG.connectionDistance);
					ctx.beginPath();
					ctx.moveTo(node.x, node.y);
					ctx.lineTo(other.x, other.y);
					ctx.strokeStyle = `rgba(${CONFIG.lineColor.r}, ${CONFIG.lineColor.g}, ${CONFIG.lineColor.b}, ${opacity})`;
					ctx.lineWidth = 1;
					ctx.stroke();
					connections++;
				}
			}
		});

		// Draw nodes
		nodes.forEach(node => {
			const pulse = Math.sin(node.pulsePhase) * 0.5 + 0.5;
			const currentOpacity = CONFIG.nodeOpacity.min + (CONFIG.nodeOpacity.max - CONFIG.nodeOpacity.min) * pulse;
			
			// Glow (smaller for tiny nodes)
			const gradient = ctx.createRadialGradient(
				node.x, node.y, 0,
				node.x, node.y, node.radius * 4
			);
			gradient.addColorStop(0, `rgba(${CONFIG.nodeColor.r}, ${CONFIG.nodeColor.g}, ${CONFIG.nodeColor.b}, ${currentOpacity})`);
			gradient.addColorStop(0.6, `rgba(${CONFIG.nodeColor.r}, ${CONFIG.nodeColor.g}, ${CONFIG.nodeColor.b}, ${currentOpacity * 0.2})`);
			gradient.addColorStop(1, `rgba(${CONFIG.nodeColor.r}, ${CONFIG.nodeColor.g}, ${CONFIG.nodeColor.b}, 0)`);
			
			ctx.beginPath();
			ctx.arc(node.x, node.y, node.radius * 4, 0, Math.PI * 2);
			ctx.fillStyle = gradient;
			ctx.fill();

			// Core
			ctx.beginPath();
			ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
			ctx.fillStyle = `rgba(${CONFIG.nodeColor.r}, ${CONFIG.nodeColor.g}, ${CONFIG.nodeColor.b}, ${currentOpacity + 0.15})`;
			ctx.fill();

			// Highlight if dragging
			if (node.isDragging) {
				ctx.beginPath();
				ctx.arc(node.x, node.y, node.radius * 6, 0, Math.PI * 2);
				ctx.strokeStyle = `rgba(200, 200, 200, 0.5)`;
				ctx.lineWidth = 1;
				ctx.stroke();
			}
		});

		frameCount++;
		animationId = requestAnimationFrame(draw);
	}

	function handleMouseDown(e: MouseEvent) {
		const rect = canvas.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		
		const clickedNode = findNodeAt(x, y);
		
		if (clickedNode) {
			draggedNode = clickedNode;
			isDragging = false;
			dragStartTime = Date.now();
			clickedNode.isDragging = true;
			clickedNode.vx = 0;
			clickedNode.vy = 0;
		}
	}

	function handleMouseMove(e: MouseEvent) {
		const rect = canvas.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		
		if (draggedNode) {
			const dist = getDistance(draggedNode, { x, y });
			if (dist > CONFIG.dragThreshold) {
				isDragging = true;
			}
			
			draggedNode.x = x;
			draggedNode.y = y;
		}
		
		// Cursor feedback
		const hoveredNode = findNodeAt(x, y);
		canvas.style.cursor = draggedNode ? 'grabbing' : (hoveredNode ? 'grab' : 'crosshair');
	}

	function handleMouseUp(e: MouseEvent) {
		if (!draggedNode) {
			// No drag in progress - handle as click to add node
			const rect = canvas.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;
			
			const newNode = createNode(x, y);
			newNode.vx = (Math.random() - 0.5) * CONFIG.driftSpeed;
			newNode.vy = (Math.random() - 0.5) * CONFIG.driftSpeed;
			nodes.push(newNode);
			console.log(`[NeuralNetwork] Added node #${newNode.id} at (${Math.round(x)}, ${Math.round(y)}). Total: ${nodes.length}`);
			return;
		}
		
		const dragDuration = Date.now() - dragStartTime;
		
		if (!isDragging && dragDuration < CONFIG.clickThreshold) {
			// It was a click on a node, not a drag - remove the node
			const index = nodes.indexOf(draggedNode);
			if (index > -1) {
				nodes.splice(index, 1);
				console.log(`[NeuralNetwork] Removed node #${draggedNode.id}. Total: ${nodes.length}`);
			}
		} else {
			// It was a drag - release the node with some velocity
			draggedNode.vx = (Math.random() - 0.5) * CONFIG.driftSpeed;
			draggedNode.vy = (Math.random() - 0.5) * CONFIG.driftSpeed;
		}
		
		draggedNode.isDragging = false;
		draggedNode = null;
		isDragging = false;
	}

	function handleMouseLeave() {
		if (draggedNode) {
			draggedNode.isDragging = false;
			draggedNode.vx = (Math.random() - 0.5) * CONFIG.driftSpeed;
			draggedNode.vy = (Math.random() - 0.5) * CONFIG.driftSpeed;
			draggedNode = null;
		}
		isDragging = false;
	}

	onMount(() => {
		if (!canvas) return;
		ctx = canvas.getContext('2d')!;
		resizeCanvas();
		initNodes();
		draw();

		window.addEventListener('resize', () => {
			resizeCanvas();
			initNodes();
		});
	});

	onDestroy(() => {
		if (animationId) cancelAnimationFrame(animationId);
	});
</script>

<canvas
	bind:this={canvas}
	class="neural-canvas"
	data-testid="neural-network-canvas"
	on:mousedown={handleMouseDown}
	on:mousemove={handleMouseMove}
	on:mouseup={handleMouseUp}
	on:mouseleave={handleMouseLeave}
></canvas>

<style>
	.neural-canvas {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: auto;
		z-index: 1;
		outline: 2px solid red;
	}
</style>