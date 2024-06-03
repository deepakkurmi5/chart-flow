import express, { Express } from "express";
import path = require("path");
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";

import EnvVars from "@src/config/env-vars";
import { NodeEnvs } from "@src/config/node-envs";
import { errorHandler } from "@src/middleware/error-handler";
import router from "@src/routers";
import Paths from "@src/routers/paths";
import Database from "./database";

export function createApp() {
  const app: Express = express();

  const staticDir = path.join(__dirname, "public");
  app.use(express.static(staticDir));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(
    cors({
      credentials: true,
    }),
  );
  app.use(compression());
  app.disable("x-powered-by");

  if (EnvVars.NodeEnv === NodeEnvs.Dev.valueOf()) {
    app.use(morgan("dev"));
  }

  if (EnvVars.NodeEnv === NodeEnvs.Production.valueOf()) {
    app.use(helmet());
  }

  Database.connect();

  app.use(Paths.Base, router);
  app.use(errorHandler);

  return app;
}
