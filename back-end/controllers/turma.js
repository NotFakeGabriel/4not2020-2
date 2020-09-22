/*
Verbo           Operação
POST            CREATE
GET             RETRIEVE
PUT             UPDATE
DELETE          DELETE
*/

const Turma = require('../models/Turma')

const controller = {}

controller.novo = async (req,res) => {
    try{
        await Turma.create(req.body)
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
         // Traz tudo
       let dados = await Turma.find()
            .populate('curso', 'nome')
            .populate('professor')
            .populate('sala_aula', 'nome capacidade')
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
    let obj =  await Turma.findById(id)

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

    let ret =  await Turma.findByIdAndUpdate(id, req.body)

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

    let ret = await Turma.findByIdAndDelete(id)

    if(ret) res.status(204).end()
    else res.status(404).end()
    }
    catch(erro){
        console.log(erro)
        res.status(500).send(erro)
    }
    

}
module.exports = controller