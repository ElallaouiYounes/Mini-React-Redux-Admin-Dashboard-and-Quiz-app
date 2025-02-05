import React from 'react'
import styled from 'styled-components'
import left from "../../public/leftImg2.jpg"

const Divy = styled.div`
    width: 50%;
    background-image: url(${left});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius:20px;
    margin: 4px;
`
const LLogin = () => {
  return (
    <Divy >
    </Divy>
  )
}

export default LLogin