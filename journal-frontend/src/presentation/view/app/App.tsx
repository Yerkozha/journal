import React from 'react'
import ProtectedPages from 'src/routes/ProtectedPages'
import styled from 'styled-components'
import { MainHeader } from '../components'

const WrapperTop = styled.div`
  box-shadow: 0px 8px 16px rgba(143, 155, 179, 0.16);
`
const Wrapper = styled.div`
  
`
const Main = styled.main`
  
`
const Footer = styled.footer`
  
`

export const App = () => {

  return (
    <>
      <WrapperTop>
        <MainHeader></MainHeader>
      </WrapperTop>
      <Wrapper className='wrapper'>
        <Main className='main'>
          <ProtectedPages></ProtectedPages>
        </Main>
        <Footer className='footer'></Footer>
      </Wrapper>
    </>
  )
}