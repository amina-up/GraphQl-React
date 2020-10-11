import React from 'react';
import BookList from './components/Listbooks';
import ApolloClient from "apollo-boost"
import {ApolloProvider} from "react-apollo"
import Addbook from './components/addbook';
import {H1,MainDiv,HoleCss} from "./components/styled/styled"
const client= new ApolloClient({
  uri:"http://localhost:4000/graphql"

})

function App() {
  return (
    <ApolloProvider client={client}>
      <HoleCss/> 
    <MainDiv>
      <H1>Book Store </H1>
      <BookList/>
      <Addbook/>
    </MainDiv>
    </ApolloProvider>
  );
}

export default App;
