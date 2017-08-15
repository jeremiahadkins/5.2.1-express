const express = require('express');

const app = express();

const data = [
  {id: 1, name: 'Peanut', species: 'Dog'},
  {id: 2, name: 'Ozzy', species: 'Dog'},
  {id: 3, name: 'Watson', species: 'Human'}
];

// request and resolution in callback
app.get('/', (req, res) => {
  res.send(data);
});


app.get('/item/:id', (req, res) => {
  let itemId = req.params.id;
  data.forEach((item) => {
    if (item.id == itemId) {
      res.send(item);
    }
  });
  res.send('no comprende');
});


app.get('/name', (req, res) => {
  res.send('jerry');
});


app.get('/name/:myName', (req, res) => {
  res.send('Why Hello there ' + req.params.myName);
});


app.listen(3000, () => {
  console.log('app is running on port 3000');
});

