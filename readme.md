# ndjson2table

Transform NDJSON to an HTML table.

You can install it as a CLI with `npm install ndjson2table -g` or use it programmatically.
However only the CLI includes the NDJSON parsing.

The NDJSON data has to include Objects, where each object has the same keys.

## CLI Usage

Create an HTML file from NDJSON data:
```
ndjson2table < data.ndjson > data.html
```

## Node

Here's the same in Node. Note that you can simply pipe objects to `ndjson2table`.

```js
var ndjson2table = require('ndjson2table')
var fs = require('fs')
var ndjson = require('ndjson')

fs.createReadStream('data.ndjson')
  .pipe(ndjson.parse())
  .pipe(ndjson2table())
  .pipe(fs.createWriteStream('data.html'))
```