import React, { useEffect, useState } from "react";
import currentDate from "../../../utils/date";
import dateSearchServices from "../../../utils/services/dateSearchServices";
import InputField from "../../atoms/InputField";
import PictureData from "../PictureData/PictureData";
//import dateSearch from "../../../utils/services/dateSearchService";
import {
  Footer,
  FooterText,
  Header,
  MainSectionCont,
  Title,
} from "./MainSection.styles";

const MainSection = () => {
  const [spaceData, setSpaceData] = useState(null);
  const [queryDate, setQueryDate] = useState(currentDate);
  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      console.log("before try");
      try {
        const spaceDataByDate = await dateSearchServices(queryDate);
        console.log("The request was made");
        setSpaceData(spaceDataByDate.data);
        console.log("The data: ", spaceDataByDate.data);
      } catch {
        alert("No results were found");
      }
    };
    fetchData();
  }, [queryDate]);

  return (
    <MainSectionCont>
      <Header>
        {/* <img src={logo} alt="logo" /> */}
        <Title>Len's Daily Space Report</Title>
      </Header>
      <div>
        <InputField />
      </div>
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
