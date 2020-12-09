const router = require('express').Router()

const Avisos = require('./avisos')

router.get('/',(req,res)=>{
    res.send("Pagina Inicial")
})

router.get("/avisos", async (req,res)=>{
    const avisor = await Avisos.selecionartudo()
    res.render('avisos',{avisor})
})

router.get("/avisos/novo",(req,res)=>{
    res.render('formulario_avisos')
})

router.post('/avisos/novo', async (req,res)=>{
    const titulo = req.body.titulo
    const data = req.body.data
    const Mensagem = req.body.Mensagem

    const msg = await Avisos.salvar({titulo,data,Mensagem})
    console.log(msg)
    res.render('formulario_avisos',{msg})
})

module.exports = router

