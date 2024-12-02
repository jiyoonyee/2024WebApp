import styled from "styled-components";
import { SectionsContainer, Section } from "react-fullpage";

const MainPage = () => {
  let options = {
    anchors: ["sectionOne", "sectionTwo"],
  };

  return (
    <>
      <SectionsContainer {...options}>
        <FullPageSection backImg={"../src/assets/img/background.png"}>
          <MainTextWrap>
            <p>대여와 실습이 필요한 순간</p>
            <p>
              <span>D</span>Lab에서 시작하세요
            </p>
            <p>디지털 실습실 대여와 노트북,태블릿 대여 서비스를 제공합니다.</p>
          </MainTextWrap>
          <img src="../src/assets/img/scroll.png" alt="" />
        </FullPageSection>
        <FullPageSection
          backImg={"../src/assets/img/background.png"}
        ></FullPageSection>
      </SectionsContainer>
    </>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const FullPageWrap = styled.div`
  width: 100%;
`;

const FullPageSection = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.backImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  & > img {
    position: absolute;
    bottom: 102vh;
  }
`;

const MainTextWrap = styled.div`
  width: 77%;
  font-family: "Noto Sans KR", serif;
  display: flex;
  flex-direction: column;
  gap: 20px;
  & > p:nth-child(1) {
    font-size: 75px;
    font-weight: bold;
    color: white;
  }
  & > p:nth-child(2) {
    font-size: 75px;
    font-weight: bold;
    color: white;
    & > span {
      color: #0088ff;
    }
  }
  & > p:nth-child(3) {
    font-size: 40px;
    /* font-weight: bold; */
    color: white;
  }
`;

export default MainPage;
