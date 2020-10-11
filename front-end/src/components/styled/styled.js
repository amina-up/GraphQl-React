import styled from 'styled-components'

export const ListUL = styled.ul`
padding:0px;

`
export const ListLi=styled.li`
display:inline-block ;
margin:12px;
padding:10px;
border-radius: 4px;
border:1px solid #880f4f;
box-shadow:1px 2px 3px rgba(0, 0, 0,0.3 );
cursor:pointer;
color:#880F4F

`
export const BookDetail=styled.div`
position:fixed;
top:0;
right:0;
width:40%;
height:100%;
background-color: #AD1457;
padding:30px;
overflow:auto;
box-shadow: 2px 3px 5px rgba(0, 0, 0,0.3 );
box-sizing:border-box ;
color:#fff
`
export const ButtonAdd=styled.button`
color:#FFF;
font-size: 2em;
background-color: #AD1457;
border:0;
padding:0 10px;
border-radius: 50%;
cursor: pointer;
position: absolute;
bottom:10px;
left:10px;
`
export const InputForm=styled.input`
margin:4px;
padding:6px;
box-sizing: border-box;

`
export const InputSelect=styled.select`
margin:4px;
padding:6px;
box-sizing: border-box;

`
export const Label=styled.label`
text-align:right;
padding: 6px;

`
export const Field=styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap:10px;
`
export const Form=styled.form`
background-color: #FFF;
  padding:20px;
  position: fixed;
  left:0;
  bottom:0;
  width:400px;
`
export const H1=styled.h1`
color:#444;
text-align:center
`

export const MainDiv=styled.div`
padding:0px;
box-sizing: border-box;
width:60%;
height:100%;

`
export const HoleCss=styled.body`
background-color: #eee;
font-family: "Nunito SemiBold";

`