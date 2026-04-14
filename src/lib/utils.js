export function minutesAndSecondsString(timeInSeconds) {
	let timerMinutes = Math.floor(timeInSeconds / 60);
	let timerSeconds = Math.floor(timeInSeconds % 60);
	if (timerMinutes < 10) timerMinutes = `0${timerMinutes}`;
	if (timerSeconds < 10) timerSeconds = `0${timerSeconds}`;
	return `${timerMinutes}:${timerSeconds}`;
}

export function calculateSeconds(minutes, seconds) {
	let countdownSeconds = Number.parseInt(seconds);
	countdownSeconds += 60 * Number.parseInt(minutes);
	return countdownSeconds;
}

export const thisYear = () => {
	const date = new Date(Date.now());
	return date.getFullYear();
};
