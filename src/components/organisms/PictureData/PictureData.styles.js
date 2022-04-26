import styled from "styled-components";
import BREAKPOINTS from "../../../utils/breakpoints";

export const MainContainer = styled.article`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const SectionTitle = styled.h2`
  //font-family: roboto;
  color: purple;
`;

export const SpaceImage = styled.img`
  width: 100%;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  width: 50%;
  margin-right: 90px;
  margin-left: 90px;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  width: 50%;
  margin-right: 90px;
  margin-top: 98px;
`;

export const DateContainer = styled.p`
  align-self: flex-end;
  justify-content: flex-end;
  margin-top: -15px;
  margin-bottom: -12px;
`;

export const DateText = styled.p`
  color: red;
`;
