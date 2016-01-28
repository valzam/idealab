var request = require('supertest');
var utils = require('../utils');
var chai = require('chai');
//var app = require('../../server').app;

var expect = chai.expect;

describe("authentification endpoint", function () {

  xit("should create a new user", function (done) {
    request(app)
      .post('/api/v1/users')
      .send({ email:"test@test.de", password:"test"})
      .end(function(err, res){
        expect(err).to.be.null;
        expect(res.status).to.equal(200);
        done();
      });
  });

  xit("should return an error when the email is missing", function (done) {
    request(app)
      .post('/api/v1/users')
      .send({ email:"", password:"test"})
      .end(function(err, res){
        expect(err).to.exist;
        expect(res.status).to.equal(400);
        done();
      });
  });


});
