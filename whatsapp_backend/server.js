const config=require('config')
const express=require('express')
const mongoose=require('mongoose')
const route=require('./route/index')

const dbConfig=config.get('config.dbConfig');
const dbUri="mongodb://"+dbConfig.host+"/"+dbConfig.name;
const dbOptions=dbConfig.options;

const PORT=config.get('config.server.port')

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/',route)

mongoose.connect(dbUri,dbOptions)
.then(()=>console.log("Mongo Server is connected"))
.catch(()=>console.log("Some error occured while connecting to mongo server"))

app.listen(PORT,()=>{
    console.log("Express Server is connected at PORT:"+PORT);
})
