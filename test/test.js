const request = require("supertest");

const app = require("../app");

it("should respond with a 201 ressource created status code", (done) => {
  request(app)
    .post("/tasks")
    .expect(201, { message: "task added successfully" }, done);
});
