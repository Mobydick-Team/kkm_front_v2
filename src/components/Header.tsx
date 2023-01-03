import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { GRAY_100, GRAY_350, GRAY_50 } from "../constants/colors";

export const Header = () => {
  return (
    <Box>
      <Container>
        <LeftBar>
          <Logo src="../assets/logos/header.png" />
          <SearchBar type="text" placeholder="☀︎ 햇살 좋은 날에 입을 옷이 있을까?" />
        </LeftBar>
        <Nav>
          <NavLink to="/">홈</NavLink>
          <NavLink to="/post">꼬막글</NavLink>
          <NavLink to="/chat">채팅</NavLink>
          <NavLink to="/mypage">마이페이지</NavLink>
        </Nav>
      </Container>
    </Box>
  );
};

const Box = styled.header`
  position: fixed;
  display: flex;
  width: 100%;
  height: 60px;

  align-items: center;
  justify-content: center;

  backdrop-filter: blur(5px);
  border-bottom: 1px solid ${GRAY_100};
`;

const Container = styled.div`
  display: flex;
  width: 75%;
  height: 25px;

  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const LeftBar = styled(Container)`
  width: 55%;
`;

const SearchBar = styled.input`
  width: 80%;
  outline: none;
  border: none;
  background-color: ${GRAY_50};
  padding: 10px;
`;

const Nav = styled.nav`
  display: flex;
  width: 25%;
  justify-content: space-between;
  .active {
    font-weight: bolder;
    color: #4378ff;
  }
  a {
    display: inline-block;
    color: ${GRAY_350};
    font-weight: 400;
    text-decoration: none;
    text-transform: uppercase;
    &:after {
      display: block;
      content: "";
      color: #4378ff;
      border-bottom: solid 1px #4378ff;
      transform: scaleX(0);
      transition: transform 250ms ease-in-out;
    }
    &:hover {
      transition: transform 250ms ease-in-out;
      color: #4378ff;
    }
    &:hover::after {
      transform: scaleX(1);
    }
  }
`;

const Logo = styled.img`
  height: 25px;
`;
