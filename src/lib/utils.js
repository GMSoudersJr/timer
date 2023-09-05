import { onDestroy } from 'svelte';
import { currentIntervalId } from '$lib/stores.js';

export const startAnInterval = (callback) => {
	currentIntervalId.update(( interval ) => {
		interval = setInterval(callback, 1000)
		console.log("set interval", interval);
	});
};

export function onInterval(callback, milliseconds) {
	const interval = setInterval(callback, milliseconds);
	console.log("onInterval created:", interval);
	currentIntervalId.update(intervalId => intervalId = interval )

	onDestroy(() => {
		clearInterval(interval);
		console.log("onInterval destroyed", interval);
	})
}

export function minutesAndSecondsString(timeInSeconds) {
	let timerMinutes = Math.floor(timeInSeconds / 60);
	let timerSeconds = Math.floor(timeInSeconds % 60);
	if ( timerMinutes < 10 ) timerMinutes = `0${timerMinutes}`;
	if ( timerSeconds < 10 ) timerSeconds = `0${timerSeconds}`;

	return `${timerMinutes}:${timerSeconds}`;
}
