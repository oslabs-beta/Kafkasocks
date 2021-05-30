const request = require('supertest');

const server = 'http://localhost:3000';

describe('Route Integration', () => {
  describe('/', () => {
    describe('GET', () => {
      xit('should respond with status 200', () => {
        return request(server).get('/').expect(200);
      });
    });
  });

  describe('Invalid Path', () => {
    xit('should respond to invalid path with status 404', () => {
      return request(server).get('/nonexistant').expect(404);
    });
  });

  describe('/signup', () => {
    describe('POST', () => {
      xit('should respond with status 200', () => {
        return request(server).post('/signup').expect(400);
      });
    });
  });

  describe('/messages', () => {
    describe('GET', () => {
      xit('should respond with status 200', () => {
        return request(server).get('/messages').expect(200);
      });
    });
  });

  describe('/login', () => {
    describe('POST', () => {
      xit('should respond with status 200', () => {
        return request(server).post('/login').expect(200);
      });
    });
  });

  describe('/send', () => {
    describe('POST', () => {
      xit('should respond with status 200', () => {
        return request(server).post('/send').expect(200);
      });
    });
  });
});
