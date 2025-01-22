const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const pollController = require('./pollController');

const app = express();
app.set ('view engine', 'ejs');

app.use(morgan('dev')); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/polls/:id', pollController.viewPollGetController);
app.post('/polls/:id', pollController.votePollPostController);


app.get('/create', pollController.createPollGetController);
app.post('/create', pollController.createPollPostController);

app.get('/polls', pollController.getAllPolls);

app.get('/', (req,res) =>{
    res.render('home')
})

mongoose.connect('mongodb://127.0.0.1:27017/express-cc',{ useNewUrlParser: true})
.then(() =>{
    console.log('Connected to MongoDB');
    app.listen(3000, () =>{
        console.log('Server is running on port 3000');
    });
})
.catch(err =>{
    console.error(err);
});
