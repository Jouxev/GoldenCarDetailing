import styled from "styled-components"
import { Link } from "react-router-dom";
const Container  = styled.div`
background-color: rgba(0,0,0,0.2);
border-radius: 2px;
color: var(--fontGold);
border-bottom: 0.5px solid var(--fontGold);
display: flex;
align-items: center;
height: 50px;
padding: 10px 20px;
width: 100vw%;
justify-content: space-between;

`;

const LogoContainer = styled.div`
flex: 3;
`;

const Logo = styled.h2`
font-weight: 200;
font-size: 18px;
color: white;
&:hover a {
    color: var(--fontGold);
}
`;

const MenuContainer = styled.div`
flex: 4;
display: flex;
justify-content: space-around;
`; 
const MenuItem = styled.a`
letter-spacing: 2px;
color: white;
&:hover{ 
    color: var(--fontGold);
}
`


export const Navbar = () => {
  return (
    <Container>
        <LogoContainer><Logo> <a href="#"> Golden Car Detailing </a></Logo> </LogoContainer>
        <MenuContainer>
           
            <MenuItem>  <Link to={'/'}> Accueil</Link></MenuItem>
            <MenuItem>  Nos Réalisations  </MenuItem>
            <MenuItem>  <Link to='/services'> Nos Services</Link>  </MenuItem>
            <MenuItem>  Devis </MenuItem>
            <MenuItem>  Contact </MenuItem>
          
        </MenuContainer>
    </Container>
  )
}
