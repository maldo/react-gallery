var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(8000, function () {
  console.log('Example app listening on port 3000!')
})

/*Key:
6fd98d981b8efae4fe890c04ab5f2574

Secret:
7512dba463e56332*/