import React from 'react';
import { Col } from 'react-bootstrap';
import { addMonths, subMonths } from 'date-fns';
import Header from './Header';
import DaysOfWeek from './DaysOfWeek';
import Cells from './Cells';

const Calendar = ({ setShow, selectedDate, setSelectedDate }) => {
  const [currentDate, setCurrentDate] = React.useState(new Date());

  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const prevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const onDateClick = (day) => {
    setSelectedDate(day);
    setShow(true);
  };


  return (
      <Col xs={12} md={8} lg={10} className='calendar-content'>
        <Header 
          currentDate={currentDate} 
          prevMonth={prevMonth}
          nextMonth={nextMonth}
        />
        <Cells
          currentDate={currentDate}
          selectedDate={selectedDate}
          onDateClick={onDateClick}
        />
        <DaysOfWeek
          currentDate={currentDate}
        />
      </Col>
  );
};

export default Calendar;
