import {
  Response,
  Request,
  ErrorRequestHandler,
} from "express-serve-static-core";
import logger from "jet-logger";

import HttpStatusCodes from "@src/constants/http-status-codes";
import EnvVars from "@src/config/env-vars";
import { NodeEnvs } from "@src/config/node-envs";
import { RouteError } from "@src/services/route-error.service";

export const errorHandler: ErrorRequestHandler = (
  error: Error,
  _: Request,
  response: Response,
) => {
  if (EnvVars.NodeEnv !== NodeEnvs.Test.valueOf()) {
    logger.err(error);
  }

  let status = HttpStatusCodes.BAD_REQUEST;
  if (error instanceof RouteError) {
    status = error.status;
  }
  return response.status(status).send({ error: error.message });
};
