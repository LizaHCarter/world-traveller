'use strict';

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

module.exports = Vacation;

