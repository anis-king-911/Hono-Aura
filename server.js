import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.json({ message: "Welcome to Hono!" });
});

app.get("/api/data", (c) => {
  return c.json({ data: [1, 2, 3, 4, 5] });
});

// import { serve } from "@hono/node-server";
// serve({ fetch: app.fetch, port: 7700 });
// console.log("🚀 Server running at http://localhost:7700");

export default app;
