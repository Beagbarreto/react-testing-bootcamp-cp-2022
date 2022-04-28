import React, { useContext, useEffect, useState } from "react";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import moment from 'moment';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons'
import { DateSearchContext } from "../../utils/providers/dateSearchContext";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 6px;
  //overflow: hidden;
  height: 40px;
  width: 130px;
  margin-top: 25px;
  align-items: center;
  padding-left: 10px;
`;

const Input = styled.input`
  height: 28px;
  width: 120px;
  margin-left: 5px;
  border-color: transparent;
  border-width: 0;
`;

const InputField = () => {
  const [ selectedDay, setSelectedDay ] = useState(null);
  const [ openCalendar, setOpenCalendar ] = useState(false);
  const [ displayDate, setDisplayDate ] = useState(null);
  const { queryDate, setQueryDate } = useContext(DateSearchContext);

  const displayFormat = moment(selectedDay).format("DD/MM/YYYY")
  const formattedDate = moment(selectedDay).format("YYYY-MM-DD")

  useEffect(() => {
    const dateIsSelected = () => {
      setOpenCalendar(false);
      setDisplayDate(displayFormat);
     setQueryDate(formattedDate)
      console.log(queryDate)
    }
    dateIsSelected()
  }, [selectedDay])

  return (
    <>
      <Form>
      {!openCalendar ? 
        (<InputContainer onClick={() => setOpenCalendar(true)}>
          <Input
            type="text"
            id="queryDate"
            name="queryDate"
            placeholder="DD/MM/YYYY"
            onChange={(e) => setQueryDate(formattedDate)}
            value={displayDate}
          />
          <FontAwesomeIcon icon={faCalendarDay} alt='calendar icon'/>
        </InputContainer>)
        :
          (<DayPicker 
          mode="single"
          selected={selectedDay}
          onSelect={setSelectedDay}/>)
        }
      </Form>
    </>
  );
};

export default InputField;
