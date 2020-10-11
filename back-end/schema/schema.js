const graphql=require('graphql')
const _=require('lodash')
const Book=require('../models/book')
const Auther=require('../models/auther')

const {GraphQLObjectType
    ,GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
     }=graphql;


let books=[
    {name:"the wind",genre:"fantasy",id:"1",autherid:"1"},
    {name:"the Earth",genre:"youyou",id:"2",autherid:"2"},
    {name:"the final",genre:"jojo",id:"3",autherid:"3"},
    {name:"the final",genre:"toto",id:"4",autherid:"2"},
    {name:"the final",genre:"momo",id:"5",autherid:"3"},
    {name:"the final",genre:"fofo",id:"6",autherid:"3"},
]
   
let authers=[
    {name:"patrick",age:40,id:"1"},
    {name:"Henry",age:44,id:"2"},
    {name:"Terry",age:45,id:"3"}
] 

const BookType=new GraphQLObjectType({
    name:"book",
    fields:()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        genre:{type:GraphQLString},
        auther:{
            type:AutherType,
            resolve(parent,args){
       
       return Auther.findById(parent.autherid);
            }
        }
    })

});

const AutherType=new GraphQLObjectType({
    name:"Auther",
    fields:()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        age:{type:GraphQLString},
        books:{
            type:new GraphQLList(BookType),
            resolve(parent,args){
           return Book.find({autherid:parent.id})
            }
        }
    })


});

 



const RootQuery=new GraphQLObjectType({

    name:'RootQueryType',
    fields:{
     book:{
         type:BookType,
         args:{id:{type:GraphQLID }},
         resolve(parent,args){
       

       
        return Book.findById(args.id)
        }
     },
     auther:{
        type:AutherType,
        args:{id:{type:GraphQLID}},
        resolve(parent,args){
            return Auther.findById(args.id)
        }
    },
    books:{
        type:new GraphQLList(BookType),
        resolve(){
          return Book.find()
        }
    },
    authers:{
        type:new GraphQLList(AutherType),
        resolve(){
          return Auther.find()
        }
    }

   }
    
});

const Mutation=new GraphQLObjectType({
    name:"Mutation",
    fields:{
        addAuther:{
            type:AutherType,
            args:{
                name:{type:new GraphQLNonNull(GraphQLString)},
                age:{type:new GraphQLNonNull(GraphQLInt)}
            },
            resolve(parent,args){
                let auther=new Auther({
                    name:args.name,
                    age:args.age
                })
                 return auther.save()
            }
        },
        addBook:{
            type:BookType,
            args:{
                name:{type:new GraphQLNonNull(GraphQLString)},
                genre:{type:new GraphQLNonNull(GraphQLString)},
                autherid:{type: new GraphQLNonNull(GraphQLID)}
            },
            resolve(parent,args){
             let book=new Book({
                 name:args.name,
                 genre:args.genre,
                 autherid:args.autherid
             });
             return book.save()
        }
    }
    }
    
})

module.exports=new GraphQLSchema({

    query:RootQuery,
    mutation: Mutation 
});
