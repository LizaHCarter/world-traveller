'use strict';

var Vacation = require('../models/vacation'),
    moment = require('moment'),
    _        = require('lodash');

exports.create = function(req, res){
  Vacation.create(req.body, function(){
    res.redirect('/vacations');
  });
};

exports.new = function(req,res){
  res.render('vacations/new');
};

exports.index = function(req, res){
  Vacation.all(function(err, vacations){
  res.render('vacations/index', {vacations:vacations, moment:moment});
  });
};

exports.show = function(req, res){
  Vacation.all(function(err, vacations){
    Vacation.findById(req.params.id, function(err, vacation){
      res.render('vacations/show', {vacations:vacations, vacation:vacation, moment:moment, _:_});
    });
  });
};
