import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

export const Container = styled.div`
  max-width: 428px;
  margin: 16px;
`;

export const MobileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BurgerMenu = styled(RxHamburgerMenu)`
  width: 30px;
  height: 30px;
`;

export const MobileMenuContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0px;
  left: 0px;
  background: #fff;
  opacity: 1;
  transition: opacity 220ms cubic-bezier(0.61, 0, 0.51, 1);

  &.menu-active.menu {
    opacity: 0;
    transition: opacity 220ms cubic-bezier(0.61, 0, 0.51, 1);
  }
`;

export const CloseButton = styled.button`
  border: none;
  outline: none;
  background: #000;
  border-radius: 50%;
  padding: 10px;
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const CloseButtonIcon = styled(IoClose)`
  width: 30px;
  height: 30px;
  color: #fff;
  display: flex;
`;

export const List = styled.ul`
  text-align: center;
  transform: translateY(100%);
`;

export const ListItem = styled.li`
  font-size: 24px;
`;
