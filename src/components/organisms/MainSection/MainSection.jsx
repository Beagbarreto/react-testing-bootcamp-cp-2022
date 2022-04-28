import React, { useEffect, useState } from "react";
import {currentDate} from "../../../utils/date";
//import dateSearch from "../../../utils/services/dateSearchService";
import dateSearch from "../../../utils/hooks/dateSearch";
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
  const [spaceData, setSpaceData] = useState(null);
  const [queryDate, setQueryDate] = useState(currentDate);
  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     console.log("before try");
  //     try {
  //       const spaceDataByDate = await dateSearch(queryDate);
  //       console.log("The request was made");
  //       setSpaceData(spaceDataByDate.data);
  //       console.log("The data: ", spaceDataByDate.data);
  //     } catch {
  //       alert("No results were found");
  //     }
  //   };
  //   fetchData();
  // }, [queryDate]);

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
