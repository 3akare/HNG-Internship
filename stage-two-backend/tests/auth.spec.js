const request = require('supertest');
const app = require('../index'); // Path to your Express app
const { sequelize } = require('../models'); // Sequelize instance
const { User, Organisation } = require('../models'); // Sequelize models

beforeAll(async () => {
    await sequelize.sync({ force: true }); // Ensure the database is clean before running tests
});

afterAll(async () => {
    await sequelize.close();
    await app.close();
});

describe('User Registration and Login', () => {
    let userData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        password: 'password123',
        phone: '1234567890'
    };

    let loginData = {
        email: 'john.doe@example.com',
        password: 'password123'
    };

    test('It should register a user successfully with a default organisation', async () => {
        const response = await request(app)
            .post('/auth/register')
            .send(userData);

        expect(response.status).toBe(201);
        expect(response.body.status).toBe('success');
        expect(response.body.message).toBe('Registration successful');
        expect(response.body.data.user).toHaveProperty('userId');
        expect(response.body.data.user).toHaveProperty('firstName', 'John');
        expect(response.body.data.user).toHaveProperty('lastName', 'Doe');
        expect(response.body.data.user).toHaveProperty('email', 'john.doe@example.com');
        expect(response.body.data).toHaveProperty('accessToken');
    });

    test('It should fail if required fields are missing during registration', async () => {

    // test('It should log in the user successfully', async () => {
    //     const response = await request(app)
    //         .post('/auth/login')
    //         .send(loginData);

    //     expect(response.status).toBe(201);
    //     expect(response.body.status).toBe('success');
    //     expect(response.body.message).toBe('Login successful');
    //     expect(response.body.data.user).toHaveProperty('userId');
    //     expect(response.body.data.user).toHaveProperty('firstName', 'John');
    //     expect(response.body.data.user).toHaveProperty('lastName', 'Doe');
    //     expect(response.body.data.user).toHaveProperty('email', 'john.doe@example.com');
    //     expect(response.body.data).toHaveProperty('accessToken');
    // });

    // test('It should fail if required fields are missing during registration', async () => {
    //     let incompleteUserData = {
    //         firstName: '',
    //         lastName: 'Doe',
    //         email: '',
    //         password: 'password123'
    //     };

    //     const response = await request(app)
    //         .post('/auth/register')
    //         .send(incompleteUserData);

    //     expect(response.status).toBe(422);
    //     expect(response.body.errors).toContainEqual([{
    //         field: 'all',
    //         message: 'All fields are required'
    //     }]);
    //     expect(response.body.errors).toContainEqual({
    //         field: 'email',
    //         message: 'Email is required'
    //     });
    // });

    // test('It should fail if there is a duplicate email or userId', async () => {
    //     const response = await request(app)
    //         .post('/auth/register')
    //         .send(userData);

    //     expect(response.status).toBe(422);
    //     expect(response.body.errors).toContainEqual({
    //         field: 'email',
    //         message: 'Email already exists'
    //     });
    // });
});
