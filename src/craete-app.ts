import express, { Express } from 'express';
import path = require('path');
import morgan from 'morgan';

import router from './routers';

export function createApp() {
  const app: Express = express();

  app.use('/static', express.static(path.join(__dirname, 'public')));
  app.use(morgan('dev'));
  app.use('/api', router);

  return app;
}
