import mongoose from "mongoose";
import EnvVars from "./env-vars";

const { DatabaseUsername, DatabasePassword, DatabaseName } = EnvVars;

export const MONGODB_CONNECTION = `mongodb+srv://${DatabaseUsername}:${DatabasePassword}@saberdao-api.pi8uhtw.mongodb.net/${DatabaseName}`;

export const MONGO_OPTIONS: mongoose.ConnectOptions = {
  retryWrites: true,
  w: "majority",
};
