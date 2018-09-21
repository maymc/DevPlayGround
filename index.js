const express = require('express');
const app = express();

//make a request to the api, you will receive the data, and you will serve the data to the webpage

app.get('https://www.ncdc.noaa.gov/cdo-web/api/v2/datasets', (req, res) => {
  res.json(req.body);
})

app.get('/', (req, res) => {
  res.json('hellooo');
})

app.listen(8011);