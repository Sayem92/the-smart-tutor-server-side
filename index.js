const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

const port = process.env.PORT || 5000;
 

app.get('/', (req, res) =>{
    res.send('Programming Learner server is running now')
})

app.listen(port, ()=>{
    console.log('server running port is ', port);
})