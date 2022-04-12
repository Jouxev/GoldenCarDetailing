import styled from "styled-components";

const Container = styled.div`
opacity: 0.9;
  color: white;
  height: 180px;
  width: 280px;
  margin: 5px;
  border-radius: 20px;
  border: 0.5px solid var(--fontGold);
  background-color: var(--bgColor);
  -webkit-box-shadow: 0px 7px 23px 0px rgba(178, 156, 139, 0.72);
  box-shadow: 0px 7px 23px 0px rgba(178, 156, 139, 0.72);
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.2s ease all;
  cursor: pointer;
  &:hover {
      opacity: 1;
      transform: scale(1.05);
  }
`;
const Title = styled.h1`
  font-size: 22px;
  margin: 0px 5px;
`;
const ImageContainer = styled.div`
  font-size: 32px;
  margin: 0px 5px;
  transition: 0.2 ease all;
  cursor: pointer;
  &:hover {
    color: var(--fontGold);
    transform: scale(1.2);
  }
`;
const Desc = styled.p`
  margin: 5px 10px;
  font-size: 12px;
  color: lightgray;
`;

export const Service = (props) => {
  return (
    <Container>
      <ImageContainer>{props.item.img}</ImageContainer>
      <Title> {props.item.title} </Title>
      <Desc> {props.item.desc}</Desc>
    </Container>
  );
};
