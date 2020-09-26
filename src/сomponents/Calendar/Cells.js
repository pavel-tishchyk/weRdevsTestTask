import React from 'react';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, format, isSameMonth, isSameDay, addDays } from 'date-fns';
import { Col, Row } from 'react-bootstrap';

const Cells = ({ currentDate, selectedDate, onDateClick }) => {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const dateFormat = "dd";
  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = "";

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
    formattedDate = format(day, dateFormat);
    const cloneDay = day;
    days.push(
        <Col 
        className={`cell ${!isSameMonth(day, monthStart)
        ? "disabled" : isSameDay(day, selectedDate) 
        ? "selected" : "" }`} 
        key={day} 
        onClick={() => onDateClick(cloneDay)}
        > 
        <div className="embed-responsive embed-responsive-1by1">
          <div className="embed-responsive-item">
            {formattedDate}
          </div>
        </div>
      </Col>
      );
    day = addDays(day, 1);
    }
    rows.push(
        <Row noGutters key={day}> {days} </Row>
      );
    days = [];
  }
  return <div>{rows}</div>;
};

export default Cells;
