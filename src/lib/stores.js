import { writable } from 'svelte/store';

function createMinuteOrSecondObject() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		increment: () => update((n) => (n < 59 ? n + 1 : 0)),
		decrement: () => update((n) => (n > 0 ? n - 1 : 59)),
		reset: () => set(0),
		setValue: (n) => set(Math.max(0, Math.min(59, parseInt(n) || 0)))
	};
}

export const activitySeconds = createMinuteOrSecondObject();
export const activityMinutes = createMinuteOrSecondObject();

export const recoverySeconds = createMinuteOrSecondObject();
export const recoveryMinutes = createMinuteOrSecondObject();

export const runningTimer = writable(false);
export const timerToDisplay = writable(null);
export const currentIntervalId = writable(null);
export const currentTimeoutId = writable(null);
