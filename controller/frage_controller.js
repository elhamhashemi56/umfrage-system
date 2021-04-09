
const frage = require('../models/frage')


// const frageGetController = async (req, res, next)=>{
// console.log('test ob hier was läuft');
//         try{
//             let allfrage = await frage.find({Umfrage:req.Umfrage._id});
//             res.status(200).send(allfrage)
//         }catch(error){
//             res.status(500).send('Error @ GET/todo')
//         }
// }



const frageGetController = async (req, res, next)=>{
    console.log('test ob hier was läuft');
            try{
                const { _id } = req.params;
               
                let allfrage = await frage.find({ _id });
                res.status(200).send(allfrage)
            }catch(error){
                res.status(500).send('Error @ GET/todo')
            }
    }



const fragePostController = async (req, res, next)=>{
    try{
        console.log(req.body);
            // let newUmfrage = await frage.create({...req.body,user:req.tokenUser.userId} );
            let newfrage = await frage.create(req.body);
            res.status(201).send(newfrage)
    }catch(error){
        res.status(500).send('Error @ POST/todo')
    }
}


const fragePutController = async (req, res, next)=>{
    try{
        const {id} = req.params;
        let valuesChanging = req.body
        let updatedUmfrage = await frage.findOneAndUpdate({_id:id, valuesChanging})
        res.status(200).send(updatedUmfrage)
    }catch(error){
        res.status(500).send('Error @ PUT/todo')
    }
}

const frageDelController = async (req, res, next)=>{
    try{
        const {id} = req.params;
        let UmfrageDel = await frage.deleteOne({_id:id});
        res.status(200).send(UmfrageDel)
    }catch(error){
        res.status(500).send('Error @ DELETE/todo')
    }
}


module.exports = { frageGetController, fragePostController, fragePutController, frageDelController}


