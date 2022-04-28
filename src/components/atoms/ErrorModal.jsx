import styled from "styled-components";

const ModalBox = styled.div`
  background: white;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  margin-top: height;
  justify-content: center;
  align-items: center;
  padding-top: 25px;
  padding-bottom: 20px;
  padding-right: 15%;
  padding-left: 15%;
`;

const Overlay = styled.div`
  position: absolute;
  display: flex;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  z-index: 999px;
  elevation: 999px;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.div`
  position: "absolute";
  top: 0px;
  left: 0px;
  width: 290px;
  height: 155px;
  background-color: "rgba(0, 0, 0, 0.5)";
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
`;

const Button = styled.button`
  display: flex;
  width: 45%;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: #105bd8;
  border-radius: 40px;
  border-color: transparent;
  overflow: hidden;
  cursor: grab;
`;

const ButtonText = styled.p`
  color: white;
  font-weight: bold;
  font-size: 15px;
`;

const ErrorModal = ({ children, onClickEnabled }) => {
  const handleClick = () => {
    if (onClickEnabled) {
      onClickEnabled();
    }
  };

  return (
    <Overlay>
      <ModalContainer>
        <ModalBox>
          {children}
          <ButtonContainer>
            <Button onClick={handleClick}>
              <ButtonText>Close</ButtonText>
            </Button>
          </ButtonContainer>
        </ModalBox>
      </ModalContainer>
    </Overlay>
  );
};

export default ErrorModal;
