import React,{Component}from 'react';
import  {graphql} from "react-apollo"
import {getBookQeury} from '../queries/queries'
import{BookDetail} from "../components/styled/styled"



function BookDetails(props){

           
const displayBookDetails=()=>{
        const {book}=props.data
     if(book){
    return(
        <div>
            <h2>{book.name}</h2>
              <p>{book.genre}</p>
              <p>{book.auther.name}</p>
    <p>All books by {book.auther.name}</p>
            <ul>
              {book.auther.books.map(item=>{
                  return <li key={item.id}>{item.name}</li>
              })}

                </ul> 

        </div>
    )
}else{
    return(
        <div>NO book selected</div>
    )
}
      
    }
    
      return (
        <BookDetail>
      {displayBookDetails()}
        </BookDetail>
       
      );
      }

    export default graphql(getBookQeury,{
     options: (props)=>{
         return{
             variables:{
                 id:props.bookid
             }
         }
     }  
    })(BookDetails);
    