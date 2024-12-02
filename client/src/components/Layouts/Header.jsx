import styled from "styled-components";

const Header = () => {
  return (
    <>
      <Wrap>
        <HeaderWrap>
          <img src="../src/assets/img/LogoWhite.png" alt="로고" />
        </HeaderWrap>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 10vh;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderWrap = styled.div`
  width: 90%;
  height: 100%;
  background-color: transparent;
  border-bottom: 1px solid blue;
`;

export default Header;
