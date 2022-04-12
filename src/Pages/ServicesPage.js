import styled from "styled-components";
import { Navbar } from "../Components";
import { Service } from "../Components/Service";
import { services } from "../data/services";
const Container = styled.div`
  height: calc(100vh - 90px);
  width: 100vw;
  background-color: var(--bgColor);
`;
const ServicesContainer = styled.div`
height: 100%;
background-color: #F5F5F5;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;
const Left = styled.div`
flex: 1;
margin: 0px 40px;
`
const Right = styled.div`
flex: 3;
display: flex;
flex-wrap: wrap;
`
const TitleContainer = styled.div``;
const Title = styled.h1`
  text-transform: uppercase;
  color: white;
  text-shadow: 4px 6px 9px rgba(0, 0, 0, 0.74);

  &:hover {
    color: var(--fontGold);
  }
`;
const Description = styled.p`
color: gray;
`;
export const ServicesPage = () => {
  return (
    <Container>
      <Navbar />
      <ServicesContainer>
          <Left>
          <TitleContainer>
          <Title> Prestations </Title>
          <Description> La seule chose qui m’importe est de repousser mes limites afin de vous fournir une prestation au-delà de vos attentes! </Description>
        </TitleContainer>
          </Left>
            <Right> { services.map( (item) => (
                <Service item={item} />
            ))} </Right>
        
      </ServicesContainer>
    </Container>
  );
};
