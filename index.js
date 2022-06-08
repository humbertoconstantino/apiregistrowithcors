const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

var register = false

app.post('/register', (req, res) =>{
    this.register = true
    res.send('')
}) 

app.get('/', (req, res) =>{
    res.send(this.register)
    this.register = false
}) 
const port = process.env.PORT || 3333
app.listen(3333, (console.log('Servidor aberto')))