import React from 'react';
import banner1 from "./assets/peaky-blinders.jpg";
import banner2 from "./assets/euphoria.jpg";
import banner3 from "./assets/spiderman.jpg";
import styled from 'styled-components';


const Box = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   overflow-x: auto;
   scroll-behavior: smooth;
   flex: none ;
`

const Banner = styled.img`
    height: 43vh;
    
`

function Home () {
    return(
        <Box>
           <Banner src = {banner1} /> 
           <Banner src = {banner2}/>
           <Banner src = {banner3} />
        </Box>
    )
}

export default Home;