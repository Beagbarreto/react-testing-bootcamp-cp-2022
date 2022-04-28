import React, { useEffect, useState, useContext } from "react";
import dateSearch from "../../../utils/hooks/dateSearch";
import { LoaderContext } from "../../../utils/providers/loader";
import { currentDate } from "../../../utils/date";
// COMPONENTS
import { ErrorModal, InputField } from "../../atoms";
// UI
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
  const { showLoader, hideLoader } = useContext(LoaderContext);
  const [errorModal, setErrorModal] = useState(false);
  const [error, setError] = useState(null);

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


  const handleClose = () => setErrorModal(false);

  return (
    <MainContainer>
      <InputField />
      {/* <LeftContainer>
        <SectionTitle>{spaceData.title}</SectionTitle>
        <DateContainer>
          <DateText>{spaceData.date}</DateText>
        </DateContainer>
        <SpaceImage src={spaceData.url} alt={spaceData.title} />
      </LeftContainer>
      <RightContainer>
        <p>{spaceData.explanation}</p>
      </RightContainer> */}
      {errorModal && (
        <ErrorModal onClickEnabled={handleClose}>{error}</ErrorModal>
      )}
    </MainContainer>
  );
};

export default PictureData;
