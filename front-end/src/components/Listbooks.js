import React,{Component}from 'react';
import  {graphql} from "react-apollo"
import {getBooksQuery} from "../queries/queries"
import BookDetails from './bookDetails';
import {ListUL,ListLi} from "../components/styled/styled"
import { useState } from 'react';

function BookList (props){

const [selected,SetSelected]=useState(null)



const displayBooks=()=>{
    let data=props.data
    if(data.loading){
        return(<div>Loading books</div>)
    }else{
       return data.books.map(book=>{
           return(
          <ListLi key={book.id} onClick={(e)=>SetSelected(book.id)}>{book.name}</ListLi> 
           )
       })
    
    }
}
    

   
  return (
    <>
    <ListUL>
     {displayBooks()}
    </ListUL>
    <BookDetails bookid={selected}/>
    </>
   
  );

}
export default graphql(getBooksQuery)(BookList);
