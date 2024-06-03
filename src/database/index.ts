import mongoose from "mongoose";
import logger from "jet-logger";

import { MONGO_OPTIONS, MONGODB_CONNECTION } from "@src/config";

interface Connection {
  isConnected: number | boolean | undefined;
}

const connection: Connection = {
  isConnected: undefined,
};

async function connect() {
  if (connection?.isConnected) {
    logger.err("already connected to DB");
    return;
  }

  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;

    if (connection.isConnected === 1) {
      logger.warn("use previous connection DB");
      return;
    }
    await mongoose.disconnect();
  }

  const connect = await mongoose.connect(MONGODB_CONNECTION, MONGO_OPTIONS);

  logger.info("new DB connection ");
  connection.isConnected = connect.connections[0].readyState;
}

async function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === "production") {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      logger.err("not diconnected DB");
    }
  }
}

const Database = { connect, disconnect };

export default Database;
