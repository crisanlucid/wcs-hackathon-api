var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var request = require('request');
var server = require('../app');
var chaiHttp = require('chai-http');


chai.use(chaiHttp);

describe('Get Test', function() {
    'use strict';

    it('should return ok GET', function(done) {
        chai.request(server)
            .get('/api/v1/resume')
            .end(function(err, res){
                res.should.have.status(200);
                done(err);
            });
    });

});
