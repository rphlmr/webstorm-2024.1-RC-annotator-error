import { serveStatic } from "@hono/node-server/serve-static";

const config = { root: "./build/client" };
// ✅ no error
serveStatic(config);

// ❌ Annotator error
serveStatic({
    root: "./build/client",
});
