const express=require('express')
const graphqlHTTP=require('express-graphql').graphqlHTTP;
const schema=require("../schema/schema")
const mongoose=require('mongoose')
const cors=require('cors')
const app=express()

app.use(cors())
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}))


mongoose.connect("mongodb+srv://samia:samia123@cluster0.relm0.mongodb.net/graphqldb?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
},console.log('connect db')
)
app.listen(4000,()=>{
    console.log("listnening on port 4000")
})


