const request = require('supertest');
const connectToDb = require('../config.js');

describe('Test the root path', () => {
  test('It should response the GET method', async () => {
    const response = await request(connectToDb).get();
    expect(response.statusCode).toBe(200);
  });
});