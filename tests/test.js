import { expect, test } from '@playwright/test';

// ─── Helpers ──────────────────────────────────────────────────────────────────

const startStop = (page) => page.locator('#button-timer-start-stop');
const reset = (page) => page.locator('#reset-button');

const actMin = (page) => page.getByRole('spinbutton', { name: 'Activity minutes' });
const actSec = (page) => page.getByRole('spinbutton', { name: 'Activity seconds' });
const recMin = (page) => page.getByRole('spinbutton', { name: 'Recovery minutes' });
const recSec = (page) => page.getByRole('spinbutton', { name: 'Recovery seconds' });

const actMinInc = (page) => page.getByRole('button', { name: 'Increase Activity minutes' });
const actMinDec = (page) => page.getByRole('button', { name: 'Decrease Activity minutes' });
const actSecInc = (page) => page.getByRole('button', { name: 'Increase Activity seconds' });
const actSecDec = (page) => page.getByRole('button', { name: 'Decrease Activity seconds' });
const recMinInc = (page) => page.getByRole('button', { name: 'Increase Recovery minutes' });
const recMinDec = (page) => page.getByRole('button', { name: 'Decrease Recovery minutes' });
const recSecInc = (page) => page.getByRole('button', { name: 'Increase Recovery seconds' });
const recSecDec = (page) => page.getByRole('button', { name: 'Decrease Recovery seconds' });

// ─── Initial State ───────────────────────────────────────────────────────────

test('page title is correct', async ({ page }) => {
	await page.goto('/');
	await expect(page).toHaveTitle('Interval Timer');
});

test('app heading is visible', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('.app-title')).toContainText('INTERVAL TIMER');
});

test('activity timer starts at 0 m and 0 s', async ({ page }) => {
	await page.goto('/');
	await expect(actMin(page)).toHaveValue('0');
	await expect(actSec(page)).toHaveValue('0');
});

test('recovery timer starts at 0 m and 0 s', async ({ page }) => {
	await page.goto('/');
	await expect(recMin(page)).toHaveValue('0');
	await expect(recSec(page)).toHaveValue('0');
});

test('start button is disabled when both timers are 00:00', async ({ page }) => {
	await page.goto('/');
	await expect(startStop(page)).toBeDisabled();
});

test('start button shows play emoji initially', async ({ page }) => {
	await page.goto('/');
	await expect(startStop(page)).toContainText('▶');
});

test('idle display shows tagline', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByText('Your pace. Your power.')).toBeVisible();
});

// ─── Activity Minutes ─────────────────────────────────────────────────────────

test('activity minutes increments from 0 to 1', async ({ page }) => {
	await page.goto('/');
	await actMinInc(page).click();
	await expect(actMin(page)).toHaveValue('1');
});

test('activity minutes decrements from 1 to 0', async ({ page }) => {
	await page.goto('/');
	await actMinInc(page).click();
	await actMinDec(page).click();
	await expect(actMin(page)).toHaveValue('0');
});

test('activity minutes wraps from 59 to 0 on increment', async ({ page }) => {
	await page.goto('/');
	await actMinDec(page).click(); // 0 -> 59
	await expect(actMin(page)).toHaveValue('59');
	await actMinInc(page).click(); // 59 -> 0
	await expect(actMin(page)).toHaveValue('0');
});

test('activity minutes wraps from 0 to 59 on decrement', async ({ page }) => {
	await page.goto('/');
	await actMinDec(page).click();
	await expect(actMin(page)).toHaveValue('59');
});

// ─── Activity Seconds ─────────────────────────────────────────────────────────

test('activity seconds increments from 0 to 1', async ({ page }) => {
	await page.goto('/');
	await actSecInc(page).click();
	await expect(actSec(page)).toHaveValue('1');
});

test('activity seconds decrements from 1 to 0', async ({ page }) => {
	await page.goto('/');
	await actSecInc(page).click();
	await actSecDec(page).click();
	await expect(actSec(page)).toHaveValue('0');
});

test('activity seconds wraps from 0 to 59 on decrement', async ({ page }) => {
	await page.goto('/');
	await actSecDec(page).click();
	await expect(actSec(page)).toHaveValue('59');
});

test('activity seconds wraps from 59 to 0 on increment', async ({ page }) => {
	await page.goto('/');
	await actSecDec(page).click(); // 0 -> 59
	await actSecInc(page).click(); // 59 -> 0
	await expect(actSec(page)).toHaveValue('0');
});

// ─── Recovery Minutes ─────────────────────────────────────────────────────────

test('recovery minutes increments from 0 to 1', async ({ page }) => {
	await page.goto('/');
	await recMinInc(page).click();
	await expect(recMin(page)).toHaveValue('1');
});

test('recovery minutes decrements from 1 to 0', async ({ page }) => {
	await page.goto('/');
	await recMinInc(page).click();
	await recMinDec(page).click();
	await expect(recMin(page)).toHaveValue('0');
});

test('recovery minutes wraps from 0 to 59 on decrement', async ({ page }) => {
	await page.goto('/');
	await recMinDec(page).click();
	await expect(recMin(page)).toHaveValue('59');
});

test('recovery minutes wraps from 59 to 0 on increment', async ({ page }) => {
	await page.goto('/');
	await recMinDec(page).click(); // 0 -> 59
	await recMinInc(page).click(); // 59 -> 0
	await expect(recMin(page)).toHaveValue('0');
});

// ─── Recovery Seconds ─────────────────────────────────────────────────────────

test('recovery seconds increments from 0 to 1', async ({ page }) => {
	await page.goto('/');
	await recSecInc(page).click();
	await expect(recSec(page)).toHaveValue('1');
});

test('recovery seconds decrements from 1 to 0', async ({ page }) => {
	await page.goto('/');
	await recSecInc(page).click();
	await recSecDec(page).click();
	await expect(recSec(page)).toHaveValue('0');
});

test('recovery seconds wraps from 0 to 59 on decrement', async ({ page }) => {
	await page.goto('/');
	await recSecDec(page).click();
	await expect(recSec(page)).toHaveValue('59');
});

test('recovery seconds wraps from 59 to 0 on increment', async ({ page }) => {
	await page.goto('/');
	await recSecDec(page).click(); // 0 -> 59
	await recSecInc(page).click(); // 59 -> 0
	await expect(recSec(page)).toHaveValue('0');
});

// ─── Start Button Enable/Disable ──────────────────────────────────────────────

test('start button enables when activity minutes > 0', async ({ page }) => {
	await page.goto('/');
	await actMinInc(page).click();
	await expect(startStop(page)).toBeEnabled();
});

test('start button enables when activity seconds > 0', async ({ page }) => {
	await page.goto('/');
	await actSecInc(page).click();
	await expect(startStop(page)).toBeEnabled();
});

test('start button enables when recovery minutes > 0', async ({ page }) => {
	await page.goto('/');
	await recMinInc(page).click();
	await expect(startStop(page)).toBeEnabled();
});

test('start button enables when recovery seconds > 0', async ({ page }) => {
	await page.goto('/');
	await recSecInc(page).click();
	await expect(startStop(page)).toBeEnabled();
});

test('start button disables again when activity minutes decremented back to 0', async ({ page }) => {
	await page.goto('/');
	await actMinInc(page).click();
	await expect(startStop(page)).toBeEnabled();
	await actMinDec(page).click();
	await expect(startStop(page)).toBeDisabled();
});

// ─── Start / Pause / Resume ───────────────────────────────────────────────────

test('clicking start shows activity display and pause emoji', async ({ page }) => {
	await page.goto('/');
	await actMinInc(page).click();
	await startStop(page).click();
	await expect(page.getByText('Activity 💦', { exact: true })).toBeVisible();
	await expect(startStop(page)).toContainText('⏸');
});

test('clicking start hides setup controls', async ({ page }) => {
	await page.goto('/');
	await actSecInc(page).click();
	await startStop(page).click();
	// Setup sections are removed from DOM when timer is running
	await expect(page.getByRole('group', { name: 'Activity minutes' })).not.toBeVisible();
	await expect(page.getByRole('group', { name: 'Recovery minutes' })).not.toBeVisible();
});

test('pausing shows play emoji and re-enables start button', async ({ page }) => {
	await page.goto('/');
	await actMinInc(page).click();
	await startStop(page).click(); // start
	await startStop(page).click(); // pause
	await expect(startStop(page)).toContainText('▶');
});

test('pausing keeps activity display visible', async ({ page }) => {
	await page.goto('/');
	await actMinInc(page).click();
	await startStop(page).click(); // start
	await startStop(page).click(); // pause
	await expect(page.getByText('Activity 💦', { exact: true })).toBeVisible();
});

test('resuming after pause shows pause emoji again', async ({ page }) => {
	await page.goto('/');
	await actMinInc(page).click();
	await startStop(page).click(); // start
	await startStop(page).click(); // pause
	await startStop(page).click(); // resume
	await expect(startStop(page)).toContainText('⏸');
});

// ─── Reset Button ─────────────────────────────────────────────────────────────

test('reset clears activity timer to 0', async ({ page }) => {
	await page.goto('/');
	await actMinInc(page).click();
	await actSecInc(page).click();
	await reset(page).click();
	await expect(actMin(page)).toHaveValue('0');
	await expect(actSec(page)).toHaveValue('0');
});

test('reset clears recovery timer to 0', async ({ page }) => {
	await page.goto('/');
	await recMinInc(page).click();
	await recSecInc(page).click();
	await reset(page).click();
	await expect(recMin(page)).toHaveValue('0');
	await expect(recSec(page)).toHaveValue('0');
});

test('reset stops a running timer and shows idle display', async ({ page }) => {
	await page.goto('/');
	await actMinInc(page).click();
	await startStop(page).click();
	await reset(page).click();
	await expect(page.getByText('Your pace. Your power.')).toBeVisible();
});

test('reset disables start button', async ({ page }) => {
	await page.goto('/');
	await actMinInc(page).click();
	await startStop(page).click();
	await reset(page).click();
	await expect(startStop(page)).toBeDisabled();
});

test('reset shows play emoji on start button', async ({ page }) => {
	await page.goto('/');
	await actMinInc(page).click();
	await startStop(page).click();
	await reset(page).click();
	await expect(startStop(page)).toContainText('▶');
});

test('reset re-enables setup controls', async ({ page }) => {
	await page.goto('/');
	await actSecInc(page).click();
	await startStop(page).click();
	await reset(page).click();
	await expect(actMinInc(page)).toBeEnabled();
	await expect(actSecInc(page)).toBeEnabled();
	await expect(recMinInc(page)).toBeEnabled();
	await expect(recSecInc(page)).toBeEnabled();
});

// ─── Activity → Recovery Transition ──────────────────────────────────────────

test('activity timer reaching zero shows alarm message "Take A Break!"', async ({ page }) => {
	await page.goto('/');
	await actSecInc(page).click(); // 1 second activity
	await startStop(page).click();
	await expect(page.getByText('Take A Break!')).toBeVisible({ timeout: 5000 });
});

test('after activity ends, recovery display appears', async ({ page }) => {
	await page.goto('/');
	await actSecInc(page).click(); // 1 second activity
	await recMinInc(page).click(); // 1 minute recovery
	await startStop(page).click();
	await expect(page.getByText('Recovery 🧘', { exact: true })).toBeVisible({ timeout: 5000 });
});

// ─── Recovery → Reset Transition ─────────────────────────────────────────────

test('recovery timer reaching zero shows alarm message "Get To Work!"', async ({ page }) => {
	await page.goto('/');
	await actSecInc(page).click(); // 1 second activity
	await recSecInc(page).click(); // 1 second recovery
	await startStop(page).click();
	await expect(page.getByText('Get To Work!')).toBeVisible({ timeout: 8000 });
});

test('after recovery ends, app resets to idle state', async ({ page }) => {
	await page.goto('/');
	await actSecInc(page).click(); // 1 second activity
	await recSecInc(page).click(); // 1 second recovery
	await startStop(page).click();
	await expect(page.getByText('Your pace. Your power.')).toBeVisible({ timeout: 10000 });
	await expect(startStop(page)).toContainText('▶');
});
