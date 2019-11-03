'use strict';
var debug = require('debug')

module.exports.init = function(config, logger, stats) {

  return {
   
    onresponse: function(req, res, next) {      
        res.setHeader('NorsvinDC', 'Nijmegen')    
        next(null);    
    }
  };
}

