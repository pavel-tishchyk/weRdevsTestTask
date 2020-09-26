import React from 'react';
import { format } from "date-fns";
import { Row, Col } from 'react-bootstrap';

const Header = ({ prevMonth, currentDate, nextMonth }) => {
  const dateFormat = "MMMM yyyy";

  return (
   <Row noGutters>
      <Col>
         <div className="embed-responsive embed-responsive-1by1">
            <div className="embed-responsive-item">
               <span className="material-icons" onClick={prevMonth}>
                  chevron_left
               </span>
            </div>
         </div>
      </Col>
      <Col xs={9}>
         <span>{format(currentDate, dateFormat)}</span>
      </Col>
      <Col>
         <div className="embed-responsive embed-responsive-1by1">
            <div className="embed-responsive-item">
               <span className="material-icons" onClick={nextMonth}>
                  chevron_right
               </span>
            </div>
         </div>
      </Col>
   </Row>
  );
};

export default Header;
