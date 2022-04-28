import styled from "styled-components";
import BREAKPOINTS from "../../../utils/breakpoints";

export const MainSectionCont = styled.div`
  //@media (max-width: ${BREAKPOINTS.maxTabletWidth}) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  //}
`;

export const SectionTitle = styled.h1`
  //font-family: roboto;
  color: black;
`;

export const Header = styled.div`
  display: flex;
  /* flex-direction: column; */
  width: 100%;
  height: 130px;
  padding-top: 10px;
  align-items: center;
  background-color: #0a0a0a;
`;

export const Title = styled.h1`
  //font-family: roboto;
  text-align: center;
  color: white;
`;

export const Logo = styled.img`
  height: 80px;
  width: 95px;
  padding: 115px;
`;

export const Footer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #105bd8;
  height: 60px;
  //background:#6cf; */
`;

export const FooterText = styled.h5`
  //font-family: roboto;
  color: white;
`;