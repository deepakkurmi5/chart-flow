import dotenv from 'dotenv';
import path from 'path';
import http from 'http';

dotenv.config({ path: path.join(__dirname, '../.env') });

import { createApp } from './craete-app';
import { PORT } from './env';

const app = createApp();

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Runing on port http://localhost:${PORT}`);
});
