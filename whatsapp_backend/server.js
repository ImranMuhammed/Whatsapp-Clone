const config=require('config')
const express=require('express')
const mongoose=require('mongoose')
const route=require('./route/index')
const Pusher=require('pusher');
const cors=require('cors')

const dbConfig=config.get('config.dbConfig');
//const dbUri="mongodb://"+dbConfig.host+"/"+dbConfig.name;
const dbUri="mongodb+srv://"+dbConfig.user+":"+dbConfig.password+"@cluster0.izza9.mongodb.net/"+dbConfig.name+"retryWrites=true&w=majority";
const dbOptions=dbConfig.options;

const PORT=config.get('config.server.port')

const app=express();

const pusher = new Pusher({
    appId: "1153202",
    key: "432d39f38726b0f4c850",
    secret: "d51d46950f437d05dfef",
    cluster: "ap2",
    useTLS: true
  });
 

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use('/',route)

mongoose.connect(dbUri,dbOptions)
.then(()=>console.log("Mongo Server is connected"))
.catch(()=>console.log("Some error occured while connecting to mongo server"))

const db=mongoose.connection;

db.once("open",()=>{
    console.log("Pusher DB connected");
    const msgCollection=db.collection("chatmodels");
    
    const changeStream=msgCollection.watch();
    changeStream.on('change', (change)=>{
        console.log("A change occured ", change)

        if(change.operationType==='insert'){
            const messageDetails=change.fullDocument;
            pusher.trigger('messages','inserted',{
                name:messageDetails.contactNumber,
                message:messageDetails.message
            })        
        }
        else{
            console.log("Error in triggering pusher")
        }
    });
});
 

app.listen(PORT,()=>{
    console.log("Express Server is connected at PORT:"+PORT);
})
