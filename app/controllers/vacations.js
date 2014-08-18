'use strict';

var Vacation = require('../models/vacation'),
    moment = require('moment');

exports.create = function(req, res){
  console.log(req.body);
};

exports.new = function(req,res){
  res.render('vacations/new');
};

exports.index = function(req, res){
  Vacation.all(function(err, vacations){
  res.render('vacations/index', {vacations:vacations, moment:moment});
  });
};
