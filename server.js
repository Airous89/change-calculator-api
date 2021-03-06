const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors())


app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(8000, function () {
  console.log('CORS-enabled web server listening on port 8000')
})