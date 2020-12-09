const router = require('express').Router()

const Avisos = require('../../views/Avisos')

router.get('/',(req,res)=>{
    res.send("Pagina Inicial")
})

router.get("/avisos",(req,res)=>{
    res.send("Pagina de avisos cadastrados")
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

