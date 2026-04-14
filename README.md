# [Interval Timer](https://timer-pink-phi.vercel.app/)

An interval timer built with SvelteKit. Set an activity time and a recovery time, start the clock, and go.

**Live:** https://timer-pink-phi.vercel.app/

## How it works

Set your activity and recovery intervals using the pill spinners. Type a value directly, use the arrow keys, or tap the + and − buttons. The Start button enables once either timer is above zero. When the activity timer runs out an alarm sounds and recovery begins automatically. When recovery ends the app resets.

## Running locally

```bash
git clone git@github.com:GMSoudersJr/timer.git
cd timer
npm install
npm run dev
```

## Stack

SvelteKit 2 · Svelte 5 · Vite · Playwright · Vercel
