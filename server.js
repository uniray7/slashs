const express = require('express')
const app = express()
const port = 3003

var usersRouter = require('./routes/users');

app.get('/', (req, res) => res.send('Hello World!'))
app.use('/users', usersRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
