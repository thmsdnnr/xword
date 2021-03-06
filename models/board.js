let mongoose = require('mongoose');
let sha1 = require('sha1');
let Schema = mongoose.Schema;

let boardSchema = new Schema({
  meta: {
    title: String,
    author: String,
    description: String,
    dateCreated: Date,
    language: { type: String, default: 'en' },
    size: Number,
    stats: {
      totalSolves: Number,
      averageSolveTime: Number,
      userRatedQuality: Array,
      userRatedDifficulty: Array
    }
  },
  data: [{}]
});

boardSchema.statics.findById = function (id,callback) {
   this.findOne({_id:id}, function(err, data) { return callback(err,data); });
 }

boardSchema.statics.listAll = function (callback) {
  this.find({}, {id:1,'meta':1}, function(err, data) { return callback(err,data); });
}

boardSchema.statics.findBoardsByUser = function (user, callback) {
  this.find({'meta.author':user}, function(err,data) {
    if(!data) { callback(null); }
    callback(err, data);
  });
}

boardSchema.statics.findByTitle = function (title,callback) {
    this.findOne({'meta.title':title}, function(err, data) { return callback(err,data); });
  }

boardSchema.statics.create = function(query, callback) {
  let newBoard=new this();
  newBoard.meta=query.meta;
  newBoard.data=query.data;
  newBoard.save(callback);
  }

boardSchema.statics.saveSolveData = function(info, callback) {
  this.update({_id:info.id}, {$set: {
        'meta.stats.totalSolves': info.totalSolves,
        'meta.stats.averageSolveTime': info.averageSolveTime }},
    function(err,data){ callback(err,data); });
  }

module.exports=mongoose.model('Board', boardSchema);
