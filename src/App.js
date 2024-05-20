import { useState } from "react";
import {
  BurgerMenu,
  CloseButton,
  CloseButtonIcon,
  Container,
  List,
  ListItem,
  MobileContainer,
  MobileMenuContainer,
} from "./styles.styled";

export const App = () => {
  const [menu, setMenu] = useState(false);

  const showMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <Container>
        <MobileContainer>
          <h1>Logo</h1>
          <BurgerMenu onClick={showMenu} />
        </MobileContainer>
        <MobileMenuContainer className={`menu ${menu || "menu-active"}`}>
          <CloseButton type="button" onClick={showMenu}>
            <CloseButtonIcon />
          </CloseButton>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Services</ListItem>
            <ListItem>Contact us</ListItem>
          </List>
        </MobileMenuContainer>
      </Container>
    </>
  );
};
