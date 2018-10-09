import React from 'react'
import styled from "styled-components";


import { images } from "./datas"

const Landing = ({ background }) => {
    console.log(background)
    return (
        <Wrapper id="Home">
            <img src={background} />
        </Wrapper>
    )
}

export default Landing

const Image = styled.img`
position: fixed;
top: 0;
z-index: -1;
width: 100vw;
height: auto;
min-height: 80vh !important;
`

const Wrapper = styled.div`

`

