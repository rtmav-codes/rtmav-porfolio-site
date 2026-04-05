import { test, expect } from '@playwright/test';

test.describe('NeuralNetwork Component', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
		// Wait for canvas to be visible
		await page.waitForSelector('[data-testid="neural-network-canvas"]', { state: 'visible' });
	});

	test('canvas is rendered on page load', async ({ page }) => {
		const canvas = page.locator('[data-testid="neural-network-canvas"]');
		await expect(canvas).toBeVisible();
		
		// Check canvas has dimensions
		const box = await canvas.boundingBox();
		expect(box).not.toBeNull();
		expect(box!.width).toBeGreaterThan(0);
		expect(box!.height).toBeGreaterThan(0);
	});

	test('initial nodes are created on mount', async ({ page }) => {
		// Check console for initialization message
		const logs: string[] = [];
		page.on('console', msg => logs.push(msg.text()));
		
		await page.reload();
		await page.waitForSelector('[data-testid="neural-network-canvas"]', { state: 'visible' });
		
		// Wait a bit for initialization
		await page.waitForTimeout(500);
		
		const initLog = logs.find(log => log.includes('[NeuralNetwork] Initialization complete'));
		expect(initLog).toBeDefined();
	});

	test('clicking on canvas adds a new node', async ({ page }) => {
		const canvas = page.locator('[data-testid="neural-network-canvas"]');
		const box = await canvas.boundingBox();
		expect(box).not.toBeNull();
		
		// Collect console logs
		const logs: string[] = [];
		page.on('console', msg => logs.push(msg.text()));
		
		// Click in center of canvas
		await canvas.click({ position: { x: box!.width / 2, y: box!.height / 2 } });
		
		// Wait for log
		await page.waitForTimeout(100);
		
		const clickLog = logs.find(log => log.includes('[NeuralNetwork] Click at'));
		const addLog = logs.find(log => log.includes('[NeuralNetwork] Added node'));
		
		expect(clickLog).toBeDefined();
		expect(addLog).toBeDefined();
	});

	test('multiple clicks add multiple nodes', async ({ page }) => {
		const canvas = page.locator('[data-testid="neural-network-canvas"]');
		const box = await canvas.boundingBox();
		expect(box).not.toBeNull();
		
		const logs: string[] = [];
		page.on('console', msg => logs.push(msg.text()));
		
		// Click 5 times at different positions
		for (let i = 0; i < 5; i++) {
			await canvas.click({ 
				position: { 
					x: (box!.width / 6) * (i + 1), 
					y: box!.height / 2 
				} 
			});
			await page.waitForTimeout(50);
		}
		
		await page.waitForTimeout(200);
		
		const addLogs = logs.filter(log => log.includes('[NeuralNetwork] Added node'));
		expect(addLogs.length).toBe(5);
	});

	test('canvas has correct CSS positioning', async ({ page }) => {
		const canvas = page.locator('[data-testid="neural-network-canvas"]');
		
		const position = await canvas.evaluate(el => {
			const style = window.getComputedStyle(el);
			return {
				position: style.position,
				zIndex: style.zIndex,
				top: style.top,
				left: style.left
			};
		});
		
		expect(position.position).toBe('fixed');
		expect(position.zIndex).toBe('0');
		expect(position.top).toBe('0px');
		expect(position.left).toBe('0px');
	});

	test('nodes are visible (screenshot comparison)', async ({ page }) => {
		const canvas = page.locator('[data-testid="neural-network-canvas"]');
		
		// Wait for animation to render
		await page.waitForTimeout(1000);
		
		// Take screenshot of canvas area
		await expect(canvas).toHaveScreenshot('neural-network-initial.png', {
			maxDiffPixels: 1000 // Allow some variance due to animation
		});
	});

	test('canvas responds to window resize', async ({ page }) => {
		const canvas = page.locator('[data-testid="neural-network-canvas"]');
		
		const logs: string[] = [];
		page.on('console', msg => logs.push(msg.text()));
		
		// Resize window
		await page.setViewportSize({ width: 800, height: 600 });
		await page.waitForTimeout(500);
		
		const resizeLog = logs.find(log => log.includes('[NeuralNetwork] Window resize detected'));
		expect(resizeLog).toBeDefined();
		
		// Check canvas resized
		const box = await canvas.boundingBox();
		expect(box!.width).toBe(800);
		expect(box!.height).toBe(600);
	});

	test('component logs frame statistics periodically', async ({ page }) => {
		const logs: string[] = [];
		page.on('console', msg => logs.push(msg.text()));
		
		await page.reload();
		await page.waitForSelector('[data-testid="neural-network-canvas"]', { state: 'visible' });
		
		// Wait for ~6 seconds to get at least one frame stats log
		await page.waitForTimeout(6000);
		
		const frameLog = logs.find(log => log.includes('[NeuralNetwork] Frame'));
		expect(frameLog).toBeDefined();
	});
});