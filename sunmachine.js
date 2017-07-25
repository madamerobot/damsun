//---------CONFIG AND LIBRARIES-----------------

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

//---------ROUTES-----------------

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//---------PORT CONFIG-----------------

var server = app.listen(5000, () => {
	console.log('Yo, this server is running on port:' + server.address().port);
});
