const request = require('supertest');
const faker = require('faker');
const httpStatus = require('http-status');
const app = require('../../src/app');
const setupTestDB = require('../utils/setupTestDB');
const { User } = require('../../src/models');
const { response } = require('../../src/app');

setupTestDB();

describe('Auth routes', () => {
  describe('POST /v1/new/user', () => {
    let newUser;
    beforeEach(() => {
      newUser = {
        username: faker.name.findName(),
        email: faker.internet.email().toLowerCase(),
        credit: 900,
      };
    });

    test('should return 201 and successfully register user if request data is ok', async () => {
      const res = await request(app).post('/v1/new/user').send(newUser).expect(httpStatus.CREATED);
      expect(res.body.user).toMatchObject({
        id: expect.anything(),
        username: newUser.username,
        email: newUser.email,
        credit: newUser.credit,
      });

    });

    test('should return 400 error if email is invalid', async () => {
      newUser.email = 'invalidEmail';
      await request(app).post('/v1/new/user').send(newUser).expect( {
        code: 400,
        message: '"email" must be a valid email'
      });
    });
  });

});

