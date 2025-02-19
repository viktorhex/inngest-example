import { inngest } from "./client";

let count = 0;
export const helloWorld = inngest.createFunction(
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

  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    console.log('hello', count++)
    return { message: `Hello ${event.data.email}!` };
  },
);
