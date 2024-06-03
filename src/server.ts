import "./pre-start";
import http from "http";
import debug from "debug";
import logger from "jet-logger";
import "express-async-errors";

import EnvVars from "@src/config/env-vars";
import { createApp } from "./app";

const app = createApp();

const server = http.createServer(app);

const SERVER_START_MSG = `Runing on port http://localhost:${EnvVars.Port.toString()}`;

server.listen(EnvVars.Port, () => {
  logger.info(SERVER_START_MSG);
});

server.on("SIGTERM", () => {
  debug("SIGTERM signal received: closing HTTP server");
  server.close(() => {
    debug("HTTP server closed");
  });
});
