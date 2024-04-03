import { serveStatic } from "@hono/node-server/serve-static";

serveStatic({ root: "./build/client" })