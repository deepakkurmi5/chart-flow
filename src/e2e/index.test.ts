import { Express } from 'express-serve-static-core';
import request from 'supertest';
import { createApp } from '../craete-app';

describe('/api/users', () => {
  let app: Express;

  beforeAll(() => {
    app = createApp();
  });

  it('Should return empty array when GET api/users', async () => {
    const response = await request(app).get('/api/users');
    expect(response.body).toStrictEqual([]);
  });
});
