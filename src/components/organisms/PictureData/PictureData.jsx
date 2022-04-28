import React, { useEffect, useState, useContext } from "react";
import { LoaderContext } from "../../../utils/providers/loader";
import { DateSearchContext } from "../../../utils/providers/dateSearchContext";
import dateSearch from "../../../utils/hooks/dateSearch";
// COMPONENTS
import { ErrorModal, InputField } from "../../atoms";
// UI
import {
  SectionTitle,
  SpaceImage,
  InnerContainer,
  MainContainer,
  RightContainer,
  LeftContainer,
  DateText,
  DateContainer,
  InputContainer,
} from "./PictureData.styles";

const PictureData = () => {
  const [spaceData, setSpaceData] = useState(null);
  const { queryDate } = useContext(DateSearchContext);
  const { showLoader, hideLoader } = useContext(LoaderContext);
  const [errorModal, setErrorModal] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      //showLoader();
      try{
        const response = await dateSearch(queryDate);
        setSpaceData(response.data)
        console.log('data: ', response.data);
        hideLoader()
      } catch (error) {
        if (error.response) {
          const dateError = error.response.data.msg ? error.response.data.msg : error.response.data.message;
          console.log('First', error.response.data);
          setError(dateError)
        } else {
          setError('There was an error, please try again.')
        }
        console.log('Error: ', error)
        setErrorModal(true);
      }
      hideLoader();
    }
    fetchData();
  }, [queryDate]);


  const handleClose = () => setErrorModal(false);

  return (
    <MainContainer>
      <InputContainer>
        <InputField />
      </InputContainer>
      <InnerContainer>
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
      </InnerContainer>
      {errorModal && (
          <ErrorModal onClickEnabled={handleClose}>{error}</ErrorModal>
        )}
    </MainContainer>
  );
};

export default PictureData;
