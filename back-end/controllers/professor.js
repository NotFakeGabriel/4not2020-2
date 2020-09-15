/*
Verbo           Operação
POST            CREATE
GET             RETRIEVE
PUT             UPDATE
DELETE          DELETE
*/

const Professor = require('../models/Professor')

const controller = {}

controller.novo = async (req,res) => {
    try{
        await Professor.create(req.body)
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
       let dados = await Professor.find() // Traz tudo
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
    let obj =  await Professor.findById(id)

    if(obj) res.send(obj)
    else res.status(404).end()  
    }
    catch(erro){
        console.log(erro)
        res.status(500).send(erro)
    }
   

}

controller.atualizar = async (req, res) => {
    try{
        const id = req.body._id

    let ret =  await Professor.findByIdAndUpdate(id, req.body)

    if(ret) res.status(204).end()
    else res.status(404).end()
    }
    catch(erro){
        console.log(erro)
        res.status(500).send(erro)
    }
    
    
}

controller.excluir = async (req, res) => {
    try{
        const id = req.body._id

    let ret = await Professor.findByIdAndDelete(id)

    if(ret) res.status(204).end()
    else res.status(404).end()
    }
    catch(erro){
        console.log(erro)
        res.status(500).send(erro)
    }
    

}
module.exports = controller