import React from 'react';
import { startOfWeek, format, addDays } from 'date-fns';
import { Col, Row } from 'react-bootstrap';

const DaysOfWeek = ({ currentDate }) => {
  const dateFormat = "EEEEE";
  const days = [];
  let startDate = startOfWeek(currentDate);
  
   for (let i = 0; i < 7; i++) {
    days.push(
      <Col key={i}>
        <div className="embed-responsive embed-responsive-1by1">
          <div className="embed-responsive-item">
            {format(addDays(startDate, i), dateFormat)}
          </div>
        </div>
      </Col>
    );
   }
   return <Row noGutters>{days}</Row>;
};

export default DaysOfWeek;
