'use strict';

var Mongo = require('mongodb'),
    _     = require('lodash');

function Vacation(o){
  this.name = o.name;
  this.coordinates = {lat:parseFloat(o.lat), lng:parseFloat(o.lng)};
  this.start = new Date(o.start);
  this.end = new Date(o.end);
}

Object.defineProperty(Vacation, 'collection', {
  get: function(){return global.mongodb.collection('vacations');}
});

Vacation.create = function(o, cb){
  var v = new Vacation(o);
  Vacation.collection.save(v, cb);
};

Vacation.all = function(cb){
  Vacation.collection.find().toArray(cb);
};

Vacation.findById = function(id, cb){
  var _id = Mongo.ObjectID(id);
  Vacation.collection.findOne({_id:_id}, function(err, g){
    cb(err, _.create(Vacation.prototype, g));
  });
};

module.exports = Vacation;

