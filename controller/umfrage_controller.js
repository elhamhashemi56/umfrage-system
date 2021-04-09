
const Umfrage = require('../models/umfrage')


const umfrageGetController = async (req, res, next)=>{
console.log('test ob hier was läuft');
        try{
            let allUmfrage = await Umfrage.find({user:req.tokenUser.userId});
            res.status(200).send(allUmfrage)
        }catch(error){
            res.status(500).send('Error @ GET/todo')
        }
}




const umfragePostController = async (req, res, next)=>{
    try{
            let newUmfrage = await Umfrage.create({...req.body,user:req.tokenUser.userId} );
            res.status(201).send(newUmfrage)
    }catch(error){
        res.status(500).send('Error @ POST/todo')
    }
}


const umfragePutController = async (req, res, next)=>{
    try{
        const {id} = req.params;
        let valuesChanging = req.body
        let updatedUmfrage = await Umfrage.findOneAndUpdate({_id:id, valuesChanging})
        res.status(200).send(updatedUmfrage)
    }catch(error){
        res.status(500).send('Error @ PUT/todo')
    }
}

const umfrageDelController = async (req, res, next)=>{
    try{
        const {id} = req.params;
        let UmfrageDel = await Umfrage.deleteOne({_id:id});
        res.status(200).send(UmfrageDel)
    }catch(error){
        res.status(500).send('Error @ DELETE/todo')
    }
}


module.exports = { umfrageGetController, umfragePostController, umfragePutController, umfrageDelController}


