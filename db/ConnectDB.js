const mongoose=require('mongoose')


const ConnectDb=()=>{
    return mongoose.connect(process.env.livedb)

    .then(()=>{
        console.log('connected successfully')
    })
    .catch((error)=>{
        console.log(error)
    })
}

module.exports=ConnectDb