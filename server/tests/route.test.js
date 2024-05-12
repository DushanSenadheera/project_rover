const request = require('supertest');
const location = require('../routes/locationRoute');
const food = require('../routes/foodRoute');
const stay = require('../routes/stayRoute');

describe('Test the location route', () => {
  test('It should respond to the POST method', () => {
    return request(location)
      .post('/api/location') // replace with your route
      .send({
        location: 'Tangalle',
        budget: 1000,
        duration: 3,
        interests: ['beaches', 'nature & wildlife'],
      })
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  }, 10000);
});


describe('Test the location route', () => {
  test('It should respond to the POST method', () => {
    return request(stay)
      .post('/api/stay') // replace with your route
      .send({
        location: 'Galle'
      })
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
}, 10000);


describe('Test the location route', () => {
  test('It should respond to the POST method', () => {
    return request(food)
      .post('/api/food') // replace with your route
      .send({
        location: 'Galle'
      })
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
}, 10000);