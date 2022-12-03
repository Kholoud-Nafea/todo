const express = require('express')
const mongoose = require('mongoose')
const todoRoute = require( './routes/todoRoute.js')
const dotenv = require('dotenv')

dotenv.config()

const app  = express()
app.use(express.json())

  const connect =()=> mongoose.connect(process.env.MONGO,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify:false,
    // serverSelectionTimeoutMS: 5000,
    family: 4,
  }).then((db) => {
    console.log("db connected")
  }).catch((err)=>{
    console.log(err)
  })
   


  connect()

app.use('/api', todoRoute)


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on port ${PORT}`)); 