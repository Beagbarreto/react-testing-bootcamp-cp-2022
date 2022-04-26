import React, { useEffect, useState } from "react";
import currentDate from "../../../utils/date";
import dateSearchServices from "../../../utils/services/dateSearchServices";
import {
  SectionTitle,
  SpaceImage,
  MainContainer,
  RightContainer,
  LeftContainer,
  DateText,
  DateContainer,
} from "./PictureData.styles";

const PictureData = () => {
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
    <MainContainer>
      <LeftContainer>
        <SectionTitle>{spaceData.title}</SectionTitle>
        <DateContainer>
          <DateText>{spaceData.date}</DateText>
        </DateContainer>
        <SpaceImage src={spaceData.url} alt={spaceData.title} />
      </LeftContainer>
      <RightContainer>
        <p>{spaceData.explanation}</p>
      </RightContainer>
    </MainContainer>
  );
};

export default PictureData;
