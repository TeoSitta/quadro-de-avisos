//import
const express = require('express')
const bodyParser = require('body-parser')
//ligando o express
const app = express()
//config view engine
app.set('view engine','ejs')
app.use(express.static('public'))
//config bodyparser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
//rotas
app.get("/",(req,res)=>{
    res.send("Vai tadeuzord!")
})
//config da porta
app.listen(3000)