import React from 'react'
import { Navbar } from '../Components'
import styled from 'styled-components'
import mer from '../assets/Images/mercGCD.png'
import {RiFacebookCircleLine, RiInstagramLine} from 'react-icons/ri'
import {SiTiktok} from 'react-icons/si'
const Container = styled.div`
height: 100vh;
background: url(${mer}) no-repeat right;
background-color: var(--bgColor);
`
const HeroContainer = styled.div`
height: calc(100vh - 90px);
width: 100%;
display: flex;
align-items: center;
`

const Right = styled.div`
margin : 0px 40px;
flex: 2;
`
const Title = styled.h1`
color: white;
margin-bottom: 20px;
text-transform: uppercase;
width: 70%;
text-shadow: 4px 6px 9px rgba(0,0,0,0.74);
`
const SocialIcons = styled.div`
margin-top: 20px;
width: 160px;
font-size: 18px;
color: var(--fontGold);
display: flex;
justify-content: space-between;
transition: 0.2s ease all;
& > svg:hover{
  color: white;
  cursor: pointer;
  transform: scale(1.1);
}
`
const Left = styled.div`
flex: 1;
`
const ActionContainer = styled.div``
const Button =  styled.button`
font-size: 18px;
padding: 10px 20px;
font-weight: 200;
background-color: ${ (props) => props.primary  ? '#e12e2e' : 'rgba(0,0,0,0.5)'};
cursor: pointer;
color: white;
margin-left: 10px;
border-bottom-right-radius: 10px;
border: none;
transition: 0.2s ease all;
&:hover {
  opacity: 0.8;
  color: var(--fontGold);
  transform: scale(1.1);
}
`

export const LandingPage = () => {
  return (
    <Container>
       <Navbar />  
       <HeroContainer>
         <Right>
            <Title>
              Centre de Renovation Esthetique Automobiles 
            </Title>
            <SocialIcons>
              <RiFacebookCircleLine />
              <RiInstagramLine />
              <SiTiktok />
            </SocialIcons>
         </Right>
        <Left>
            <ActionContainer>
              <Button primary > Reserver</Button>
              <Button> Contactez-Nous </Button>
            </ActionContainer>
        </Left>
       </HeroContainer>
    </Container>
    
  )
}
