import { writable } from 'svelte/store';

function createMinuteOrSecondObject() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		increment: () => update((minutesOrSeconds) => {
			if ( minutesOrSeconds < 59 ) {
				return minutesOrSeconds + 1
			} else {
				return minutesOrSeconds = 0
			}
		}),
		decrement: () => update((minutesOrSeconds) => {
			if ( minutesOrSeconds > 0 ) {
				return minutesOrSeconds - 1
			} else {
				return minutesOrSeconds = 59
			}
		}),
		reset: () => set(0)
	};
}

export const activeSeconds = createMinuteOrSecondObject();
export const activeMinutes = createMinuteOrSecondObject();
export const activeTimeInSeconds = writable(0);

export const inactiveSeconds = createMinuteOrSecondObject();
export const inactiveMinutes= createMinuteOrSecondObject();
export const inactiveTimeInSeconds = writable(0);

export const runningTimer = writable(false);
export const currentIntervalId = writable(null);
