import { onDestroy } from 'svelte';

export function onInterval(callback, milliseconds) {
	const interval = setInterval(callback, milliseconds);

	onDestroy(() => {
		clearInterval(interval);
		console.log("interval destroyed");
	})
}

export function minutesAndSecondsString(timeInSeconds) {
	let timerMinutes = Math.floor(timeInSeconds / 60);
	let timerSeconds = Math.floor(timeInSeconds % 60);
	if ( timerMinutes < 10 ) timerMinutes = `0${timerMinutes}`;
	if ( timerSeconds < 10 ) timerSeconds = `0${timerSeconds}`;

	return `${timerMinutes}:${timerSeconds}`;
}
