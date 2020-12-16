//import
const express = require('express')
const bodyParser = require('body-parser')
const moment = require('moment')

//importando as rotas do aviso
const routerAvisos = require('./components/avisos/avisosController')

//ligando o express
const app = express()

//config view engine
app.set('view engine','ejs')
app.use(express.static('public'))

moment.locale('pt-br')
app.locals.moment = moment

//config bodyparser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//rotas
app.use(routerAvisos)

//config da porta
app.listen(3000)