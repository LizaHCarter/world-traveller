'use strict';

exports.create = function(req, res){
  console.log(req.body);
};

exports.new = function(req,res){
  res.render('vacations/new');
};
