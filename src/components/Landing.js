import React from 'react'
import styled from "styled-components";


import { images } from "./datas"

const Landing = ({ background }) => {
    console.log(background)
    return (
        <Wrapper id="Home">
            <Image src={background} />
        </Wrapper>
    )
}

export default Landing

const Image = styled.img`
z-index: -1;
width: 100vw;
height: auto;
`

const Wrapper = styled.div`

`

