const express=require('express')
const app= express()
const dotenv=require('dotenv')
dotenv.config({path:'./.env'})
const web=require('./routes/web')
const ConnectDb=require('./db/ConnectDB')
const fileUpload = require('express-fileupload')
const cors=require('cors')
const cookieParser = require('cookie-parser')

// cookies s data get k liye
app.use(cookieParser())
// cors k bina api react me kam nhi karti h 
app.use(cors())
//temp file upload
app.use(fileUpload({useTempFiles:true}))

// for data url api se json formate me ata h isye
app.use(express.json())

// connect mongose
ConnectDb()

//load route
app.use('/api',web)
//localhost:4000/api    


//server creat
app.listen(process.env.PORT,()=>{
    console.log(`server running on port localhost: ${process.env.PORT}`)
})
