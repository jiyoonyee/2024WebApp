import styled from "styled-components";

const Header = () => {
  return (
    <>
      <Wrap>
        <HeaderWrap>
          <img src="../src/assets/img/LogoWhite.png" alt="로고" />
          <img src="../src/assets/img/hamburgerWhite.png" alt="햄버거 버튼" />
        </HeaderWrap>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 80px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1000;
`;

const HeaderWrap = styled.div`
  width: 90%;
  height: 100%;
  padding: 0px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  border-bottom: 1px solid white;
  & > img {
    height: 50%;
  }
  & > img:hover {
    cursor: pointer;
  }
`;

export default Header;
