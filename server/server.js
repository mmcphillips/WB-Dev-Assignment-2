const express = require('express');
const bodyParser = require('body-parser');
const port = 3333;
const app = express();
const mockData = require('./mockData.js');

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../client/dist/`));

app.get('/api/movies', (req, res) => {
  res.send(mockData).status(201);
});

app.listen(port, () => console.log('listening on port:' + port));