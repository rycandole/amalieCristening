"use client"
import React from 'react'
import FlipBook from "@/Components/FlipBook"
import styled from 'styled-components'

const page = () => {
  return (
    <MainWrapper >
      <FlipBook />
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
padding: 20px;


.enveImg {
  width: 100%
}

// .mapsLinks {
//   display: flex
// }


`
export default page
