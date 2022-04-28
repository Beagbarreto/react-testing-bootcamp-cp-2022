import styled from "styled-components";
import BREAKPOINTS from "../../../utils/breakpoints";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InnerContainer = styled.article`
  display: flex;
  flex-direction: row;
  padding-top: 
  width: 100%;
  margin-right: 130px;
  margin-left: 130px;
`;

export const SectionTitle = styled.h2`
  //font-family: roboto;
  color: purple;
`;

export const SpaceImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  overflow: hidden;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  width: 50%;
  margin-right: 90px;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  width: 50%;
  margin-top: 98px;
`;

export const DateContainer = styled.p`
  align-self: flex-end;
  justify-content: flex-end;
  margin-top: -12px;
  margin-bottom: -5px;
`;

export const DateText = styled.p`
  color: #105bd8;
`;

export const InputContainer = styled.div`
  margin-bottom: 20px;
`;