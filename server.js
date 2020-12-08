//import
const express = require('express')
const bodyParser = require('body-parser')

//importando as rotas do aviso
const routerAvisos = require('./components/avisos/avisosController')

//ligando o express
const app = express()

//config view engine
app.set('view engine','ejs')
app.use(express.static('public'))

//config bodyparser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//rotas
app.use(routerAvisos)

//config da porta
app.listen(3000)