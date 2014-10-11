#!/usr/bin/env node

var fs = require('fs')
var ndjson = require('ndjson')

var ndjson2table = require('./')
var arg = process.argv[2]
var input

if (arg && arg !== '-') {
  input = fs.createReadStream(arg)
} else {
  input = process.stdin
}

input
  .pipe(ndjson.parse())
  .pipe(ndjson2table())
  .pipe(process.stdout)