import { onDestroy } from 'svelte';
import { currentIntervalId } from '$lib/stores.js';

export function onInterval(callback, milliseconds) {
	const interval = setInterval(callback, milliseconds);
	console.log("onInterval created:", interval);
	currentIntervalId.update(intervalId => intervalId = interval )

	onDestroy(() => {
		clearInterval(interval);
		currentIntervalId.update(intervalId => intervalId = 0);
		console.log("onInterval destroyed:", interval);
	})
}

export function minutesAndSecondsString(timeInSeconds) {
	let timerMinutes = Math.floor(timeInSeconds / 60);
	let timerSeconds = Math.floor(timeInSeconds % 60);
	if ( timerMinutes < 10 ) timerMinutes = `0${timerMinutes}`;
	if ( timerSeconds < 10 ) timerSeconds = `0${timerSeconds}`;

	return `${timerMinutes}:${timerSeconds}`;
}

export function calculateSeconds(minutes, seconds) {
	let countdownSeconds = Number.parseInt(seconds);
	countdownSeconds += (60 * Number.parseInt(minutes))
	return countdownSeconds;
}
