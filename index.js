const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

// configure view layer
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// configure data layer
const data = [
  {id: 1, name: 'Sadie', species: 'Dog'},
  {id: 2, name: 'Ozzy', species: 'Dog'},
  {id: 3, name: 'Watson', species: 'Human'}
];


// request and resolution in callback
app.get('/', (req, res) => {
  res.render('index', {items: data});
});


app.get('/item/:id', (req, res) => {
  let itemId = req.params.id;
  data.forEach((item) => {
    if (item.id == itemId) {
      //create a top level object
      res.render('detail', {model: item});
      return;
    }
  });
  res.render('notFound');
  // res.send('no comprende');
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

