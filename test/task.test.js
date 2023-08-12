/* eslint-disable no-undef */
//Require the dev-dependencies
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
let should = chai.should();

chai.use(chaiHttp);
var id;

describe("/POST Create Task", () => {
  it("it should POST id from task", (done) => {
    const body = {
      title: "test title",
      description: "test description",
      is_complete: false,
    };

    chai
      .request(server)
      .post("/tasks")
      .send(body)
      .end((_, res) => {
        res.should.have.status(201);
        res.body.should.be.a("object");
        res.body.should.have.property("data");
        id = res.body.data.id;
        done();
      });
  });
});

describe("/Get Data Task Lists", () => {
  it("it should Get data from task tasklist", (done) => {
    chai
      .request(server)
      .get("/tasks")
      .query({ page: 1, page_size: 10, search: "title" })
      .end((_, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.should.have.property("data");
        done();
      });
  });
});

describe("/Get Data Task Detail", () => {
  it("it should Get data from task detail", (done) => {
    chai
      .request(server)
      .get(`/tasks/${id}`)
      .end((_, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.should.have.property("data");
        done();
      });
  });
});

describe("/update data task", () => {
  it("it should Update data task ", (done) => {
    const body = {
      title: "Update test title",
      description: "update test description",
      is_complete: true,
    };

    chai
      .request(server)
      .patch(`/tasks/${id}`)
      .send(body)
      .end((_, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.should.have.property("data");
        done();
      });
  });
});

describe("/delete Data Task by id", () => {
  it("it should delete data task by id", (done) => {
    chai
      .request(server)
      .delete(`/tasks/${id}`)
      .end((_, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.should.have.property("data");
        done();
      });
  });
});
