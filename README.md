# [Timer App](https://timer-pink-phi.vercel.app/)

## Overview

This web-app is a Pomodoro based timer.
Set the activity/study time and the recovery/prep time
Then Let's Go!

**LIVE LINK:** https://timer-pink-phi.vercel.app/

<img src="https://github.com/GMSoudersJr/timer/assets/44438849/0e1f551a-92cb-4095-8a4f-e27587c378c8" width="200" height="200" />

## Instructions for use
- Begin by setting the minutes and / or seconds for recovery and activity
  - Start button is disabled until a timer is not 00:00
  - Increase minutes and / or seconds with the ➕ button
  - Decrease minutes and / or seconds with the ➖ button
- Then click the start button.
  - The ➕ and ➖ buttons will be disabled
  - The __Activity Timer__ will begin
  - When finished, the __Recovery Timer__ will begin
  - The timers can be paused at any time
  - There is an alarm that sounds automatically at the end of each timer

## Running the Project
This project was built with Svelte and uses its basic dependencies.  No other libraries or frameworks were used.

To run a version locally on your own machine

Optional:
```bash
#make a directory and change into it:
mkdir newDirectory && cd newDirectory
```

Required:
```bash
#clone the repository into the current directory over SSH:
git clone git@github.com:GMSoudersJr/timer.git
#change into newly cloned directory:
cd timer
#run this command to install all dependencies:
npm install
```

for a local development server, run:
```bash
npm run dev
```

run this commmand to build:

```bash
npm run build
```

## Dev Dependencies
- [Svelte](https://svelte.dev/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Vite](https://vitejs.dev/)
