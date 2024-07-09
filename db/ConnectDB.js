const mongoose=require('mongoose')


const ConnectDb=()=>{
    return mongoose.connect(process.env.Local_URl)

    .then(()=>{
        console.log('connected successfully')
    })
    .catch((error)=>{
        console.log(error)
    })
}

module.exports=ConnectDb