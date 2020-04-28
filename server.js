
const express = require('express');
const tasks = require('./routes/api')
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
    'mongodb://localhost/nodejstasks',
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }
)
mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
})
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', tasks);

const port = 3030;
app.listen(port, () => {
    console.log(`Server started at ${port}`);
});