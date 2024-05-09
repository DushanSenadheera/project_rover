const request = require('supertest');
const app = require('../index');
const stayRoute = require('../routes/stayRoute');

describe('Test the root path', () => {
  test('It should response the GET method', () => {
    return request(app).get('/').then(response => {
      expect(response.statusCode).toBe(200);
    });
  });
});

describe('Test the root path', () => {
  test('It should response the GET method', () => {
    return request(app).get('/').then(response => {
      expect(response.statusCode).toBe(200);
    });
  });

  test('It should response the GET method', () => {
    return request(app).get('/').then(response => {
      expect(response.statusCode).toBe(200);
    });
  });
});

describe('Test the root path', () => {
  test('It should response the GET method', () => {
    return request(app).get('/').then(response => {
      expect(response.statusCode).toBe(200);
    });
  });
});

// describe('Test the food path', () => {
//   test('It should response the POST method', () => {
//     return request(app).post('api/food').then(response => {
//       expect(response.statusCode).toBe(200);
//     });
//   });
// });

// describe('Test the stay path', () => {
//   test('It should response the POST method', () => {
//     return request(stayRoute).post('api/stay').then(response => {
//       expect(response.statusCode).toBe(200);
//     });
//   });
// });