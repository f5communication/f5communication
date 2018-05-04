import React from 'react'
import styled from "styled-components";
import Img from "gatsby-image";


import { images } from "./datas"

const Landing = ({ background }) => (
    <Wrapper>
        <Image sizes={background} alt={images.background}  />
    </Wrapper>
)

export default Landing

const Image = styled(Img)`
position: fixed;
top: 0;
z-index: -1;
width: 100%;
height: 100vh;
`

const Wrapper = styled.div`
        height: 100vh;

`

