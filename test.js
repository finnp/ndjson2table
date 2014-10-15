var ndjson2table = require('./')
var fs = require('fs')

console.log('Not a proper test, but you can check test.html for output.')

var stream = ndjson2table()

stream.pipe(fs.createWriteStream('test.html'))
stream.write({a: 1, b:2})
stream.write({a: 2, b:4})
stream.write({a: 4, b:5})
stream.write({b: 4, a:5})
stream.end()

