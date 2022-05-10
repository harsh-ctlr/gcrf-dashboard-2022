import React from 'react';
import styled from 'styled-components'

function footer(props) {
    return (
        <StyledFooter>
            <p>Made for 2022 Google Cloud Ready Facilitators & Students with 💖 by team at <a href="https://cucek.cusat.ac.in/">CUCEK.</a> </p>
        </StyledFooter>
    );
}

export default footer;

let StyledFooter = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 40px auto;
    padding: 10px; 
    box-sizing: border-box;
    p{
        text-align: center;
        font-size: 11px;
    }
`