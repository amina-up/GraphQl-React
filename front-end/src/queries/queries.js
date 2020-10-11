import {gql} from 'apollo-boost'

const getBooksQuery=gql`
query {
    books {
       name
      id
    }
  }
  
`;

const getAuthersQuery=gql`
query {
    authers {
       name
      id
    }
  }
  
`;
const addBookMutation=gql`

mutation ($name:String!,$genre:String!,$autherid:ID!){
    addBook(name:$name,genre:$genre,autherid:$autherid){
    name, 
    id
    }
}

`
const getBookQeury=gql`

query($id:ID){
book(id:$id){
    id
    name
    genre
    auther{
      id
       name
       age
       books{
           name
           id
       }  
    }
 }
}
`
export {getAuthersQuery,getBooksQuery,addBookMutation,getBookQeury}