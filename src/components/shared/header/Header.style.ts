import styled from "styled-components";
import { Colors } from "../../../constants/colors";

export const Box = styled.header`
  position: fixed;
  display: flex;
  width: 100%;
  height: 60px;

  align-items: center;
  justify-content: center;

  backdrop-filter: blur(5px);
  border-bottom: 1px solid ${Colors.GRAY_100};
`;

export const Container = styled.div`
  display: flex;
  width: 75%;
  height: 25px;

  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const LeftBar = styled(Container)`
  width: 55%;
`;

export const SearchBar = styled.input`
  width: 80%;
  outline: none;
  border: none;
  background-color: ${Colors.GRAY_50};
  padding: 10px;
`;

export const Nav = styled.nav`
  display: flex;
  width: 30%;
  font-size: 16px;
  font-weight: 200;
  justify-content: space-between;
  .active {
    font-weight: 700;
    color: ${Colors.BLUE};
  }
  a {
    display: inline-block;
    color: ${Colors.GRAY_350};
    font-weight: 400;
    text-decoration: none;
    text-transform: uppercase;
    &:after {
      display: block;
      content: "";
      color: #4378ff;
      border-bottom: solid 1px ${Colors.BLUE};
      transform: scaleX(0);
      transition: transform 250ms ease-in-out;
    }
    &:hover {
      transition: transform 250ms ease-in-out;
      color: ${Colors.BLUE};
    }
    &:hover::after {
      transform: scaleX(1);
    }
  }
`;

export const Logo = styled.img`
  height: 25px;
`;
