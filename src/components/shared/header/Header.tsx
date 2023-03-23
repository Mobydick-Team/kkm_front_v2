import { NavLink } from "react-router-dom";
import * as S from "./Header.style";

export const Header = () => {
  return (
    <S.Box>
      <S.Container>
        <S.LeftBar>
          <S.Logo src="../assets/logos/header.svg" />
          <S.SearchBar type="text" placeholder="☀︎ 햇살 좋은 날에 입을 옷이 있을까?" />
        </S.LeftBar>
        <S.Nav>
          <NavLink to="/">홈</NavLink>
          <NavLink to="/post">꼬막글</NavLink>
          <NavLink to="/chat">채팅</NavLink>
          <NavLink to="/write">글 작성</NavLink>
          <NavLink to="/mypage">마이페이지</NavLink>
        </S.Nav>
      </S.Container>
    </S.Box>
  );
};
