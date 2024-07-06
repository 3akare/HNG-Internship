const request = require("supertest");
const app = require("../index"); // Path to your Express app
const { sequelize } = require("../models"); // Sequelize instance
const { User, Organisation } = require("../models"); // Sequelize models

beforeAll(async () => {
  await sequelize.sync({ force: true }); // Ensure the database is clean before
});

afterAll(async () => {
  await sequelize.close();
  app.close();
});

describe("POST /auth/register", () => {
  it("should register user successfully with default organisation", async () => {
    const res = await request(app).post("/auth/register").send({
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      password: "password123",
      phone: "1234567890",
    });

    expect(res.statusCode).toEqual(201);
    expect(res.body.status).toBe("success");
    expect(res.body.message).toBe("Registration successful");
    expect(res.body.data.user.firstName).toBe("John");
    expect(res.body.data.user.email).toBe("john@example.com");
    expect(res.body.data).toHaveProperty("accessToken");
  });

  it("should fail if required fields are missing", async () => {
    const res = await request(app).post("/auth/register").send({
      lastName: "Doe",
      email: "john@example.com",
      password: "password123",
    });

    expect(res.statusCode).toEqual(422);
    expect(res.body.errors[0].field).toBe("all");
  });

  it("should fail if there's duplicate email or userId", async () => {
    await User.create({
      userId: "uniqueUserId",
      firstName: "Jane",
      lastName: "Doe",
      email: "jane@example.com",
      password: "password123",
      phone: "0987654321",
    });

    const res = await request(app).post("/auth/register").send({
      userId: "uniqueUserId",
      firstName: "John",
      lastName: "Doe",
      email: "jane@example.com",
      password: "password123",
      phone: "1234567890",
    });

    expect(res.statusCode).toEqual(422);
    expect(res.body.errors[0].field).toBe("email");
    expect(res.body.errors[0].message).toBe("Email already exists");
  });

  it("should log the user in successfully", async () => {
    await request(app).post("/auth/register").send({
      userId: "uniqueUserId",
      firstName: "Jane",
      lastName: "Doe",
      email: "alice@example.com",
      password: "password123",
      phone: "1234567890",
    });

    const res = await request(app).post("/auth/login").send({
      email: "alice@example.com",
      password: "password123",
    });

    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toBe("success");
    expect(res.body.message).toBe("Login successful");
    expect(res.body.data.user).toHaveProperty("userId");
    expect(res.body.data.user.firstName).toBe("Jane");
    expect(res.body.data.user.lastName).toBe("Doe");
    expect(res.body.data.user.email).toBe("alice@example.com");
    expect(res.body.data.user.phone).toBe("1234567890");
    expect(res.body.data).toHaveProperty("accessToken");
  });

  it("should fail with incorrect password", async () => {
    const res = await request(app).post("/auth/login").send({});
    expect(res.status).toEqual(401);
  });

  it("should fail with non-existent email", async () => {
    const res = await request(app).post("/auth/login").send({
      email: "nonexistent@example.com",
      password: "password123",
    });

    expect(res.statusCode).toEqual(401);
    expect(res.body.status).toBe("Bad request");
    expect(res.body.message).toBe("Authentication failed");
  });

  it("should fail if email is missing", async () => {
    const res = await request(app).post("/auth/login").send({
      password: "password123",
    });

    expect(res.statusCode).toEqual(401);
    expect(res.body.status).toBe("Bad request");
    expect(res.body.message).toBe("Authentication failed");
  });

  it("should fail if password is missing", async () => {
    const res = await request(app).post("/auth/login").send({
      email: "alice@example.com",
    });

    expect(res.statusCode).toEqual(401);
    expect(res.body.status).toBe("Bad request");
    expect(res.body.message).toBe("Authentication failed");
  });
});
