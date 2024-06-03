/**
 * Pre-start is where we want to place things that must run BEFORE the express
 * server is started. This is useful for environment variables, command-line
 * arguments, and cron-jobs.
 */

// NOTE: DO NOT IMPORT ANY SOURCE CODE HERE
import path from "path";
import dotenv from "dotenv";
import { parse } from "ts-command-line-args";
import { NodeEnvs } from "@src/config/node-envs";

interface IArgs {
  env: string;
}

// Command line arguments
const args = parse<IArgs>({
  env: {
    type: String,
    defaultValue: NodeEnvs.Production,
    alias: "e",
  },
});

// Set the env file
const result2 = dotenv.config({
  path: path.join(__dirname, `../.env.${args.env}`),
});

if (result2.error) {
  throw result2.error;
}
