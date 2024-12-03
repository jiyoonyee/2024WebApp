import styled from "styled-components";

const CheckSection = ({ checkTitle, checkSubTitle, inputHint, itemList }) => {
  itemList.map((el) => {
    console.log(el);
  });

  return (
    <>
      <Wrap>
        <TitleWrap>
          <CheckTitle>{checkTitle} 신청 내역 조회</CheckTitle>
          <CheckSubTitle>{checkSubTitle} 조회 가능합니다</CheckSubTitle>
        </TitleWrap>
        <InputWrap>
          <CheckInput placeholder={"ex) " + inputHint} />
          <CheckInputButton src="../src/assets/img/serach.png" />
        </InputWrap>
        <ItemNameListHeader>
          {itemList.map((el, index) => (
            <ItemNameListHeaderName key={index}>{el}</ItemNameListHeaderName>
          ))}
        </ItemNameListHeader>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const CheckTitle = styled.div`
  font-size: 24px;
  color: black;
`;

const CheckSubTitle = styled.div`
  font-size: 18px;
  color: gray;
`;

const InputWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  border-radius: 100px;
  background-color: white;
  padding: 10px;
  border: 1px solid black;
`;

const CheckInput = styled.input`
  width: 90%;
  font-size: 20px;
  outline: none;
  border: none;
`;

const CheckInputButton = styled.img`
  width: 40px;
  height: 40px;
  &:hover {
    cursor: pointer;
  }
`;

const ItemNameListHeader = styled.div`
  width: 70%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  & > div:last-child {
    border: none;
  }
`;

const ItemNameListHeaderName = styled.div`
  font-size: 18px;
  height: 100%;
  flex-grow: 1;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
`;

export default CheckSection;
