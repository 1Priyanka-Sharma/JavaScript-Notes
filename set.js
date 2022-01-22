import {setTimeout} from "timers/promises";

console.log('It will be printed 1-st');

async function newStyleDelay() {
   await setTimeout(5000);
   console.log('It will be printed 3-rd with delay');
}

newStyleDelay();

console.log('It will be printed 2-nd');