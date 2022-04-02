import React from 'react';
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';
import Movies from './Pages/Movies';
import Series from './Pages/Series';
import Home from './Pages/Home';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';


const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 19vh;
    background-color: purple;
`

const Nav = styled.ul`
    display: flex;
    flex-direction: row;
`

const List = styled.li`
    display: flex;
    list-style: none;
    text-transform: uppercase;
    justify-content: space-evenly;
    width: 24vw;
    font-weight: 600;

   :hover{
       cursor: pointer;
       color: #fff;
   }

`

const NavLink = styled(Link)`
  color: black;

  :hover{
    cursor: pointer;
    color: white;
  }
`


export default class App extends React.Component{
   

  render(){
    return(
      <Router>
        <GlobalStyle />
         <Container>
           <Nav>
           <List>
               <NavLink to = "/">Home</NavLink>
             </List>
             <List>
               <NavLink to = "/movies">Movies</NavLink>
             </List>
             <List>
               <NavLink to = "/series">Series</NavLink>
             </List>
           </Nav>
         </Container>

         <Routes>
           <Route exact path = "/" element = {<Home />}/>
           <Route path = "/movies" element = {<Movies />}/>
           <Route path = "/series" element = {<Series />}/>
        </Routes>
      </Router>
    )
  }
}