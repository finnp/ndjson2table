var createTable = require('data-table')
var Writable = require('stream').Writable
var PassThrough = require('stream').PassThrough
var duplexer = require('duplexer')

module.exports = function () {
  var input = new Writable({objectMode: true})
  var output = new PassThrough()
  var table
  var first = true
  input._write = function (obj, encoding, cb) {
    var keys = Object.keys(obj).sort()
    if(first) {
      first = false
      table = createTable(keys)
      table.pipe(output)  
    }
    table.write(obj)
    cb()
  }
  input.on('finish', function () {
    table.end()
  })
  return duplexer(input, output)
}
