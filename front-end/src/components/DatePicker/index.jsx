// libryries imports
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useDispatch  } from 'react-redux';
// styles imports
import 'react-datepicker/dist/react-datepicker.css';
import * as Styled from './styles';
// redux imports
import { changeDateFilter } from '../../features/dateFilter';


export const DatePickers = () => {
  //hooks
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const dispatch = useDispatch();

  // function to format date to api query format date(yy-mm-dd)
  function formatDate(date, format) {
    const map = {
        mm: date.getMonth() + 1,
        dd: date.getDate(),
        yy: date.getFullYear().toString().slice(-2),
        yyyy: date.getFullYear()
    };

    return format.replace(/mm|dd|yy|yyy/gi, matched => map[matched]);
  }


  /** function to send current startDate to redux
  *   every time that the current startDate changes
  **/
  function handlerStartDatePicker(date){
    // call function to format the date to 'yy-mm-dd'
    const data = formatDate(date, 'yy-mm-dd');
    setStartDate(date);
    dispatch(changeDateFilter(data));
  }

  /** function to send current endDate to redux
  *   every time that the current endDate changes
  **/
  function handlerEndDatePicker(date){
    // call function to format the date to 'yy-mm-dd'
    const data = formatDate(date, 'yy-mm-dd');
    setEndDate(date);
    dispatch(changeDateFilter(data));
  }

 
  return (
    <Styled.Container>
      <DatePicker
        selected={startDate}
        onChange={date => handlerStartDatePicker(date)}
        filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
        showYearDropdown
        scrollableYearDropdown
      />
      <DatePicker
        selected={endDate}
        onChange={date => handlerEndDatePicker(date)}
        filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
        showYearDropdown
        scrollableYearDropdown
      />
    </Styled.Container>
  )
}
