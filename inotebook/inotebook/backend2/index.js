const connectToMongo = require('./db');
connectToMongo();

const express = require('express');
const app = express();
const port = 3000;

// app.use('/api/notes', require('./routes/notes'));
// app.use('/api/auth', require('./routes/auth'));

// app.use('/api/auth', require('./routes/auth'))
// app.use('/api/notes', require('./routes/notes'))
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/auth', (req, res) => {
  obj = {
    "name": "John",
    "age": 30,
    "city": "New York"
  }
  res.send(obj)
})
app.get('/api/auth/data', (req, res) => {
  obj = {
    "name": "John wick",
    "age": 30,
    "city": "New York"
  }
  res.send(obj)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


