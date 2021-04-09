const corsHeader = (req, res, next)=>{
    console.log('cors header hinzugefügt');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, x-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS")
    next()
}

module.exports = corsHeader