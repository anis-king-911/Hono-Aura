# Hono-Demo

## Initial Project.

```owershell
npm install hono @hono/node-server
npm install -D nodemon

npm run dev
```

## Script Codeing:

### Development
```JS
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.json({ message: "Welcome to Hono!" });
});

app.get("/api/data", (c) => {
  return c.json({ data: [1, 2, 3, 4, 5] });
});

import { serve } from "@hono/node-server";
serve({ fetch: app.fetch, port: 7700 });

console.log("🚀 Server running at http://localhost:7700");
```

### Production
```JS
import { Hono } from "hono";
import { handle } from "hono/vercel";
export const runtime = "edge";

const app = new Hono(); //.basePath("/api")

app.get("/", (c) => {
  return c.json({ message: "Welcome to Hono!" });
});

app.get("/api/data", (c) => {
  return c.json({ data: [1, 2, 3, 4, 5] });
});

export const GET = handle(app);
```

## Development Resources:

  * [Hone Api NodeJS](https://hono.dev/docs/getting-started/nodejs)
  * [Hone Api Vercel](https://hono.dev/docs/getting-started/vercel)