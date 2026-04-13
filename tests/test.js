import { expect, test } from '@playwright/test';

// Selectors
const SEL = {
	// Activity timer setup
	actMinDisplay: '#activity-minutes',
	actSecDisplay: '#activity-seconds',
	actMinInc: '#active-minutes-incrementer',
	actMinDec: '#active-minutes-decrementer',
	actSecInc: '#active-seconds-incrementer',
	actSecDec: '#active-seconds-decrementer',

	// Recovery timer setup
	recMinDisplay: '#recovery-minutes',
	recSecDisplay: '#recovery-seconds',
	recMinInc: '#inactive-minutes-increment',
	recMinDec: '#inactive-minutes-decrementer',
	recSecInc: '#inactive-seconds-increment',
	recSecDec: '#inactive-seconds-decrement',

	// Controls
	startStop: '#button-timer-start-stop',
	reset: '#reset-button',
};

// ─── Initial State ───────────────────────────────────────────────────────────

test('page title is correct', async ({ page }) => {
	await page.goto('/');
	await expect(page).toHaveTitle('Interval Timer');
});

test('app heading is visible', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('.app-title')).toContainText('INTERVAL TIMER');
});

test('activity timer starts at 00 m and 00 s', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator(SEL.actMinDisplay)).toContainText('00 m');
	await expect(page.locator(SEL.actSecDisplay)).toContainText('00 s');
});

test('recovery timer starts at 00 m and 00 s', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator(SEL.recMinDisplay)).toContainText('00 m');
	await expect(page.locator(SEL.recSecDisplay)).toContainText('00 s');
});

test('start button is disabled when both timers are 00:00', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator(SEL.startStop)).toBeDisabled();
});

test('start button shows play emoji initially', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator(SEL.startStop)).toContainText('▶');
});

test('idle display shows directions text', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByText('Set Timers Above')).toBeVisible();
	await expect(page.getByText("Let's Go!")).toBeVisible();
});

// ─── Activity Minutes ─────────────────────────────────────────────────────────

test('activity minutes increments from 00 to 01', async ({ page }) => {
	await page.goto('/');
	await page.click(SEL.actMinInc);
	await expect(page.locator(SEL.actMinDisplay)).toContainText('01 m');
});

test('activity minutes decrements from 01 to 00', async ({ page }) => {
	await page.goto('/');
	await page.click(SEL.actMinInc);
	await page.click(SEL.actMinDec);
	await expect(page.locator(SEL.actMinDisplay)).toContainText('00 m');
});

test('activity minutes wraps from 59 to 00 on increment', async ({ page }) => {
	await page.goto('/');
	// Set to 59 via decrement (0 -> 59 wrap)
	await page.click(SEL.actMinDec);
	await expect(page.locator(SEL.actMinDisplay)).toContainText('59 m');
	await page.click(SEL.actMinInc);
	await expect(page.locator(SEL.actMinDisplay)).toContainText('00 m');
});

test('activity minutes wraps from 00 to 59 on decrement', async ({ page }) => {
	await page.goto('/');
	await page.click(SEL.actMinDec);
	await expect(page.locator(SEL.actMinDisplay)).toContainText('59 m');
});

// ─── Activity Seconds ─────────────────────────────────────────────────────────

test('activity seconds increments from 00 to 01', async ({ page }) => {
	await page.goto('/');
	await page.click(SEL.actSecInc);
	await expect(page.locator(SEL.actSecDisplay)).toContainText('01 s');
});

test('activity seconds decrements from 01 to 00', async ({ page }) => {
	await page.goto('/');
	await page.click(SEL.actSecInc);
	await page.click(SEL.actSecDec);
	await expect(page.locator(SEL.actSecDisplay)).toContainText('00 s');
});

test('activity seconds wraps from 00 to 59 on decrement', async ({ page }) => {
	await page.goto('/');
	await page.click(SEL.actSecDec);
	await expect(page.locator(SEL.actSecDisplay)).toContainText('59 s');
});

test('activity seconds wraps from 59 to 00 on increment', async ({ page }) => {
	await page.goto('/');
	await page.click(SEL.actSecDec); // 0 -> 59
	await page.click(SEL.actSecInc); // 59 -> 0
	await expect(page.locator(SEL.actSecDisplay)).toContainText('00 s');
});

// ─── Recovery Minutes ─────────────────────────────────────────────────────────

test('recovery minutes increments from 00 to 01', async ({ page }) => {
	await page.goto('/');
	await page.click(SEL.recMinInc);
	await expect(page.locator(SEL.recMinDisplay)).toContainText('01 m');
});

test('recovery minutes decrements from 01 to 00', async ({ page }) => {
	await page.goto('/');
	await page.click(SEL.recMinInc);
	await page.click(SEL.recMinDec);
	await expect(page.locator(SEL.recMinDisplay)).toContainText('00 m');
});

test('recovery minutes wraps from 00 to 59 on decrement', async ({ page }) => {
	await page.goto('/');
	await page.click(SEL.recMinDec);
	await expect(page.locator(SEL.recMinDisplay)).toContainText('59 m');
});

test('recovery minutes wraps from 59 to 00 on increment', async ({ page }) => {
	await page.goto('/');
	await page.click(SEL.recMinDec); // 0 -> 59
	await page.click(SEL.recMinInc); // 59 -> 0
	await expect(page.locator(SEL.recMinDisplay)).toContainText('00 m');
});

// ─── Recovery Seconds ─────────────────────────────────────────────────────────

test('recovery seconds increments from 00 to 01', async ({ page }) => {
	await page.goto('/');
	await page.click(SEL.recSecInc);
	await expect(page.locator(SEL.recSecDisplay)).toContainText('01 s');
});

test('recovery seconds decrements from 01 to 00', async ({ page }) => {
	await page.goto('/');
	await page.click(SEL.recSecInc);
	await page.click(SEL.recSecDec);
	await expect(page.locator(SEL.recSecDisplay)).toContainText('00 s');
});

test('recovery seconds wraps from 00 to 59 on decrement', async ({ page }) => {
	await page.goto('/');
	await page.click(SEL.recSecDec);
	await expect(page.locator(SEL.recSecDisplay)).toContainText('59 s');
});

test('recovery seconds wraps from 59 to 00 on increment', async ({ page }) => {
	await page.goto('/');
	await page.click(SEL.recSecDec); // 0 -> 59
	await page.click(SEL.recSecInc); // 59 -> 0
	await expect(page.locator(SEL.recSecDisplay)).toContainText('00 s');
});

// ─── Start Button Enable/Disable ──────────────────────────────────────────────

test('start button enables when activity minutes > 0', async ({ page }) => {
	await page.goto('/');
	await page.click(SEL.actMinInc);
	await expect(page.locator(SEL.startStop)).toBeEnabled();
});

test('start button enables when activity seconds > 0', async ({ page }) => {
	await page.goto('/');
	await page.click(SEL.actSecInc);
	await expect(page.locator(SEL.startStop)).toBeEnabled();
});

test('start button enables when recovery minutes > 0', async ({ page }) => {
	await page.goto('/');
	await page.click(SEL.recMinInc);
	await expect(page.locator(SEL.startStop)).toBeEnabled();
});

test('start button enables when recovery seconds > 0', async ({ page }) => {
	await page.goto('/');
	await page.click(SEL.recSecInc);
	await expect(page.locator(SEL.startStop)).toBeEnabled();
});

test('start button disables again when activity minutes decremented back to 0', async ({ page }) => {
	await page.goto('/');
	await page.click(SEL.actMinInc);
	await expect(page.locator(SEL.startStop)).toBeEnabled();
	await page.click(SEL.actMinDec);
	await expect(page.locator(SEL.startStop)).toBeDisabled();
});

// ─── Start / Pause / Resume ───────────────────────────────────────────────────

test('clicking start shows activity display and pause emoji', async ({ page }) => {
	await page.goto('/');
	await page.click(SEL.actMinInc); // set 1 minute
	await page.click(SEL.startStop);
	await expect(page.getByText('Activity 💦')).toBeVisible();
	await expect(page.locator(SEL.startStop)).toContainText('⏸');
});

test('clicking start disables increment/decrement buttons', async ({ page }) => {
	await page.goto('/');
	await page.click(SEL.actSecInc);
	await page.click(SEL.startStop);
	await expect(page.locator(SEL.actMinInc)).toBeDisabled();
	await expect(page.locator(SEL.actMinDec)).toBeDisabled();
	await expect(page.locator(SEL.actSecInc)).toBeDisabled();
	await expect(page.locator(SEL.actSecDec)).toBeDisabled();
	await expect(page.locator(SEL.recMinInc)).toBeDisabled();
	await expect(page.locator(SEL.recMinDec)).toBeDisabled();
	await expect(page.locator(SEL.recSecInc)).toBeDisabled();
	await expect(page.locator(SEL.recSecDec)).toBeDisabled();
});

test('pausing shows play emoji and re-enables start button', async ({ page }) => {
	await page.goto('/');
	await page.click(SEL.actMinInc);
	await page.click(SEL.startStop); // start
	await page.click(SEL.startStop); // pause
	await expect(page.locator(SEL.startStop)).toContainText('▶');
});

test('pausing keeps activity display visible', async ({ page }) => {
	await page.goto('/');
	await page.click(SEL.actMinInc);
	await page.click(SEL.startStop); // start
	await page.click(SEL.startStop); // pause
	await expect(page.getByText('Activity 💦')).toBeVisible();
});

test('resuming after pause shows pause emoji again', async ({ page }) => {
	await page.goto('/');
	await page.click(SEL.actMinInc);
	await page.click(SEL.startStop); // start
	await page.click(SEL.startStop); // pause
	await page.click(SEL.startStop); // resume
	await expect(page.locator(SEL.startStop)).toContainText('⏸');
});

// ─── Reset Button ─────────────────────────────────────────────────────────────

test('reset clears activity timer display to 00', async ({ page }) => {
	await page.goto('/');
	await page.click(SEL.actMinInc);
	await page.click(SEL.actSecInc);
	await page.click(SEL.reset);
	await expect(page.locator(SEL.actMinDisplay)).toContainText('00 m');
	await expect(page.locator(SEL.actSecDisplay)).toContainText('00 s');
});

test('reset clears recovery timer display to 00', async ({ page }) => {
	await page.goto('/');
	await page.click(SEL.recMinInc);
	await page.click(SEL.recSecInc);
	await page.click(SEL.reset);
	await expect(page.locator(SEL.recMinDisplay)).toContainText('00 m');
	await expect(page.locator(SEL.recSecDisplay)).toContainText('00 s');
});

test('reset stops a running timer and shows idle display', async ({ page }) => {
	await page.goto('/');
	await page.click(SEL.actMinInc);
	await page.click(SEL.startStop);
	await page.click(SEL.reset);
	await expect(page.getByText('Set Timers Above')).toBeVisible();
});

test('reset disables start button', async ({ page }) => {
	await page.goto('/');
	await page.click(SEL.actMinInc);
	await page.click(SEL.startStop);
	await page.click(SEL.reset);
	await expect(page.locator(SEL.startStop)).toBeDisabled();
});

test('reset shows play emoji on start button', async ({ page }) => {
	await page.goto('/');
	await page.click(SEL.actMinInc);
	await page.click(SEL.startStop);
	await page.click(SEL.reset);
	await expect(page.locator(SEL.startStop)).toContainText('▶');
});

test('reset re-enables increment/decrement buttons', async ({ page }) => {
	await page.goto('/');
	await page.click(SEL.actSecInc);
	await page.click(SEL.startStop);
	await page.click(SEL.reset);
	await expect(page.locator(SEL.actMinInc)).toBeEnabled();
	await expect(page.locator(SEL.actSecInc)).toBeEnabled();
	await expect(page.locator(SEL.recMinInc)).toBeEnabled();
	await expect(page.locator(SEL.recSecInc)).toBeEnabled();
});

// ─── Activity → Recovery Transition ──────────────────────────────────────────

test('activity timer reaching zero shows alarm message "Take A Break!"', async ({ page }) => {
	await page.clock.install();
	await page.goto('/');
	// Set activity to 1 second
	await page.click(SEL.actSecInc);
	await page.click(SEL.startStop);
	// Advance 1 second for the tick, then 1500ms for the transition timeout
	await page.clock.tick(1000);
	await page.clock.tick(1500);
	await expect(page.getByText('Take A Break!')).toBeVisible();
});

test('after activity ends, recovery display appears', async ({ page }) => {
	await page.clock.install();
	await page.goto('/');
	await page.click(SEL.actSecInc); // 1 second activity
	await page.click(SEL.recMinInc); // 1 minute recovery so it doesn't immediately end
	await page.click(SEL.startStop);
	await page.clock.tick(1000);  // activity tick reaches 0
	await page.clock.tick(1500);  // transition timeout fires
	await expect(page.getByText('Recovery 🧘')).toBeVisible();
});

// ─── Recovery → Reset Transition ─────────────────────────────────────────────

test('recovery timer reaching zero shows alarm message "Get To Work!"', async ({ page }) => {
	await page.clock.install();
	await page.goto('/');
	await page.click(SEL.actSecInc); // 1 second activity
	await page.click(SEL.recSecInc); // 1 second recovery
	await page.click(SEL.startStop);
	await page.clock.tick(1000);  // activity ends
	await page.clock.tick(1500);  // transition to recovery
	await page.clock.tick(1000);  // recovery ends
	await expect(page.getByText('Get To Work!')).toBeVisible();
});

test('after recovery ends, app resets to idle state', async ({ page }) => {
	await page.clock.install();
	await page.goto('/');
	await page.click(SEL.actSecInc); // 1 second activity
	await page.click(SEL.recSecInc); // 1 second recovery
	await page.click(SEL.startStop);
	await page.clock.tick(1000);  // activity ends
	await page.clock.tick(1500);  // transition to recovery
	await page.clock.tick(1000);  // recovery ends
	await page.clock.tick(1500);  // reset timeout fires
	await expect(page.getByText('Set Timers Above')).toBeVisible();
	await expect(page.locator(SEL.startStop)).toContainText('▶');
});
