import React,{Component}from 'react';
import  {graphql} from "react-apollo"
import {flowRight as compose} from 'lodash';
import {getAuthersQuery,addBookMutation, getBooksQuery} from '../queries/queries'
import {ButtonAdd,InputForm,InputSelect,Label,Field,Form} from "../components/styled/styled"
import { useState } from 'react';
 


function AddBook (props){



const [name,setName]=useState('')
const [genre,setGenre]=useState('')
const [autherid,setId]=useState('')


const dispalyAuthers=()=>{
    let data=props.getAuthersQuery
     
    if(data.loading){
        return(<option>Loading authers</option>)
    }
    else{
        return data.authers.map(auther=>{
        return(<option key={auther.id} value={auther.id}>{auther.name}</option>)
        })
    }
}
const submitForm=(e)=>{
    e.preventDefault()
 
   props.addBookMutation({
       variables:{
       name:name,
       genre:genre,
       autherid:autherid
       },
       refetchQueries:[{query:getBooksQuery}]
   })
}
    
    
    
      return (
        <>
     <Form onSubmit={submitForm}>
         <Field>
         <Label>
             Book name

         </Label>
         <InputForm type ="text" onChange={(e)=>setName(e.target.value)}/>
         </Field>
         <Field>
         <Label>
            Genre

         </Label>
         <InputForm type ="text" onChange={(e)=>setGenre(e.target.value)}/>
         </Field>
         <Field> 
         <Label>
            Auther

         </Label>
         <InputSelect onChange={(e)=>setId(e.target.value)}>
             <option>Select auther</option>
             {dispalyAuthers()}
         </InputSelect>
         </Field>
         <ButtonAdd>+</ButtonAdd>
     </Form>
        </>
       
      );
    }
    
    export default compose(
    graphql(getAuthersQuery,{name:"getAuthersQuery"}), 
    graphql(addBookMutation,{name:"addBookMutation"})
    )(AddBook);
    