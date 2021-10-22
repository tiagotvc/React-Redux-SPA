// libryries imports
import React, { useReducer } from 'react';
import { DateRangeInput } from '@datepicker-react/styled'
import { useDispatch  } from 'react-redux';
// styles imports
import * as Styled from './styles';
import * as Global from  '../../styles/global-components';
// redux imports
import { changeStartDate } from '../../features/startDateFilter';
import { changeEndDate } from '../../features/endDateFilter';

export const DatePickers = () => {
  // simple consts
  const startDate = new Date();
  const endDate = new Date();

  // hooks
  // hook used to set initial states of daterange
  const dispatch = useDispatch();
  const [state, dispatchs] = useReducer(reducer, {
    startDate:startDate,
    endDate:endDate,
    focusedInput:null
  });
 
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
    dispatch(changeStartDate(data));
  }

  /** function to send current endDate to redux
  *   every time that the current endDate changes
  **/
  function handlerEndDatePicker(date){
    // call function to format the date to 'yy-mm-dd'
    const data = formatDate(date, 'yy-mm-dd');
    dispatch(changeEndDate(data));
  }

// sets the focus and change data actions and when change the data send to redux
  function reducer(state, action) {
    switch (action.type) {
      case 'focusChange':
        return { ...state, focusedInput: action.payload};
      case 'dateChange' :
        handlerStartDatePicker(action.payload.startDate);
        handlerEndDatePicker(action.payload.endDate);
        return action.payload;
      default:
        throw new Error()
    }
  }

  return (
    <Global.Container
        display={"flex"}
        justify={"center"}
        align={"center"}
        padding={"10px"}
        >
          <Styled.Container>
              <DateRangeInput
                onFocusChange={focusedInput => dispatchs({type: 'focusChange', payload: focusedInput})}
                startDate={state.startDate}
                endDate={state.endDate}
                displayFormat={"dd/MM/yyyy"}
                onDatesChange={data => dispatchs({type: 'dateChange', payload: data})}
                focusedInput={state.focusedInput} 
              />  
          </Styled.Container>
    </Global.Container>
  )
}
