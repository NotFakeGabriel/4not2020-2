/*
Verbo           Operação
POST            CREATE
GET             RETRIEVE
PUT             UPDATE
DELETE          DELETE
*/

const Curso = require('../models/Curso')

const controller = {}

controller.novo = async (req,res) => {
    try{
        await Curso.create(req.body)
    //HTTP 201: Created
    res.status(201).end()
    }
    catch(erro){
        console.log(erro)

        res.status(500).send(erro)
    }
}

controller.listar = async (req,res) =>{
    try{
       let dados = await Curso.find() // Traz tudo
    res.send(dados) 
    }
    catch(erro){
        console.log(erro)
        res.status(500).send(erro)
    }
    
}

controller.obterUm = async (req,res) =>{
    try{
       const id = req.params.id
    let obj =  await Curso.findById(id)

    if(obj) res.send(obj)
    else res.status(404).end()  
    }
    catch(erro){
        console.log(erro)
        res.status(500).send(erro)
    }
   

}
module.exports = controller