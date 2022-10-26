const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

const port = process.env.PORT || 5000;
 
const tutorials = require('./data/courses.json')

app.get('/', (req, res) =>{
    res.send('Programming Learner server is running now')
})

app.get('/tutorials', (req, res) =>{
    res.send(tutorials)
})

app.listen(port, ()=>{
    console.log('server running port is ', port);
})