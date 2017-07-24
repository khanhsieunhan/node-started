var mongoose = require('mongoose')
let promise = mongoose.connect('mongodb://125.212.202.97/agriappdb', {
  useMongoClient: true
})
promise.then(function (db) {})
var dbmongo = mongoose.connection
dbmongo.on('error', console.error.bind(console, 'connection error:'))
dbmongo.once('open', function () {
  console.log('connected')
})
