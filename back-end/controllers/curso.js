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

module.exports = controller