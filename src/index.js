// import "./styles.css";
// import * as Sentry from "@sentry/browser";
// import { Integrations } from "@sentry/tracing";

// Sentry.init({
//   debug: true,
//   // Using Fake DSN
//   dsn: "https://username@domain/123",
//   integrations: [new Integrations.BrowserTracing()],
//   tracesSampleRate: 1,
// });

// Sentry.addGlobalEventProcessor((event) => {
//   console.log(event);
//   return null;
// });

// function makeSlowTask(ms) {
//   var begin = window.performance.now();
//   while (window.performance.now() < begin + ms);
// }

// (function loop() {
//   // Random number in range 100 - 400ms
//   var randTaskLen = Math.round(Math.random() * (400 - 10)) + 10;
//   var randDelay = Math.round(Math.random() * (1000 - 300)) + 300;
//   setTimeout(function () {
//     makeSlowTask(randTaskLen);
//     loop();
//   }, randDelay);
// })();

// var globalID;

// function repeatOften() {
//   globalID = requestAnimationFrame(repeatOften);
// }

// globalID = requestAnimationFrame(repeatOften);

// // function init() {
// //   console.log("Make observer");
// //   window._observer = new PerformanceObserver(function (entryList) {
// //     var entries = entryList.getEntries();
// //     // console.log(entries);
// //     for (var i = 0; i < entries.length; i++) {
// //       var newItem =
// //         "long task! " +
// //         "start: " +
// //         entries[i].startTime +
// //         ", duration: " +
// //         entries[i].duration +
// //         "ms, name: " +
// //         entries[i].name;
// //       console.log(entries[i], newItem);
// //     }
// //   });
// //   console.log("Observe longtask");
// //   window._observer.observe({ type: "longtask" });
// // }

// // window.init = init;

// // setTimeout(() => {
// //   window.addEventListener('beforeunload', (event) => {
// //     console.log(event);
// //     // Cancel the event as stated by the standard.
// //     event.preventDefault();

// //     window.bind({});

// //     // Chrome requires returnValue to be set.
// //     // event.returnValue = '';
// //     const lol = {};
// //     console.log(lol.kappa());
// //   }).bind({ ell: 1 });
// // }, 100);

import * as Sentry from 'sentry-browser-lite';

/**
 * UUID4 generator
 *
 * @returns string Generated UUID4.
 */
 export function uuid4() {
  // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#2117523
  return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    // eslint-disable-next-line no-bitwise
    const r = (Math.random() * 16) | 0;
    // eslint-disable-next-line no-bitwise
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const e = {
  event_id: uuid4(),
  timestamp: Date.now() / 1000,
  sdk: {
    name: 'sentry.javascript.browser.lite',
    version: '0.0.1',
  },
}

Sentry.captureEvent(e, {endpoint: "https://o447951.ingest.sentry.io/api/5429213/envelope/?sentry_key=d16ae2d36f9249849c7964e9a3a8a608"})

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<a href="http://localhost:1234#1234">Click me to</a>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
