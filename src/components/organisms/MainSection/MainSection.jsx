import React from "react";
// COMPONENTS
import PictureData from "../PictureData/PictureData";
// UI
import {
  Footer,
  FooterText,
  Header,
  Logo,
  MainSectionCont,
  Title,
} from "./MainSection.styles";
// ASSETS
import NasaLogo from "../../../assets/NasaLogo.png";

const MainSection = () => {

  return (
    <MainSectionCont>
      <Header>
        <Logo src={NasaLogo} alt="nasa logo" />
        <Title>Len's Daily Space Report</Title>
      </Header>
      <PictureData />
      <Footer>
        <FooterText>
          Project created during Wizeline Academy React Testing Bootcamp
        </FooterText>
      </Footer>
    </MainSectionCont>
  );
};

export default MainSection;
