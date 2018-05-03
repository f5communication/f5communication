import React from 'react'
import styled from "styled-components";
import Img from "gatsby-image";


import { images } from "./datas"

const Landing = ({ background }) => (
    <Wrapper>
        <Img sizes={background} alt={images.background}  />
    </Wrapper>
)

export default Landing

const Wrapper = styled.div`
        position: fixed;
        top: 0;
        z-index: -1;
        width: 100%;

`

