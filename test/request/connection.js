
'use strict';

var request = require('../context').request;
var Stream = require('stream');

describe('req.connection', function(){
  it('should return the request connection object', function(){
    var req = request();
    req.connection.should.be.instanceOf(Stream);
  })
})
