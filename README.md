Example inngest functions that throttles requests it receives and timesout when it receives too many.

Warning: w/ this config, once one run timesout, all subsequent runs queued will timeout.

```
// lib/inngest/functions.ts

  {
    id: "hello-world",
    throttle: {
      limit: 1,
      period: "5s",
      burst: 1,
      key: "event.data.email",
    },
    timeouts: {
      start: "10s",
    }
  },

  ...

```
