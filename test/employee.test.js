const mongoose = require("mongoose");
const employee = require("../models/Employee");

//Require the dev-dependencies
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
let should = chai.should();

chai.use(chaiHttp);
// parent block
describe("employee", () => {
  beforeEach((done) => {
    //Before each test we empty the database
    employee.remove({}, (err) => {
      done();
    });
  });
  /*
   * Test the /GET route
   */
  describe("/GET ", () => {
    it("it should GET all the employees", (done) => {
      chai
        .request("http://localhost:5000/api")
        .get("/get/employee")
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a("array");
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });

  /*
   * Test the /POST
   */

  describe("/POST ", () => {
    it("it should Create a  new  employee", (done) => {
      let employee = {
        first_name: "krishna",
        last_name: "mohan",
        email: "ram@hotmail.com",
        number: "+9425656675",
        gender: "M",
        photo: "https://randomuser.me/api/portraits/men/37.jpg",
      };
      chai
        .request("http://localhost:5000/api")
        .post("/post/employee")
        .send(employee)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a("object");
          done();
        });
    });
  });
});
