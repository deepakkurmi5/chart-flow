/**
 * Environments variables declared here.
 */

const EnvVars = {
  NodeEnv: process.env.NODE_ENV ?? "",
  Port: process.env.PORT ?? 0,
  DatabaseName: process.env.DATABASE_NAME ?? "",
  DatabaseUsername: process.env.MONGODB_USERNAME ?? "",
  DatabasePassword: process.env.MONGODB_PASSWORD ?? "",
};

export default EnvVars;
