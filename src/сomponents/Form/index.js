import React from 'react';
import { Modal, Form, Col } from 'react-bootstrap';
import { format } from 'date-fns';

const CalendarForm = ({ show, handleClose, selectedDate }) => {
   const monthDateFormat = "MMMM";
   const dayDateFormat = "do iiii";

   return (
      <Modal centered show={show} onHide={handleClose}>
         <Modal.Header closeButton />
         <Modal.Body>
         <Form>
            <Form.Row>
               <Col>
                  <Form.Label>Month</Form.Label>
                  <Form.Control readOnly defaultValue={format(selectedDate, monthDateFormat)} />
               </Col>
               <Col>
                  <Form.Label>Day</Form.Label>
                  <Form.Control readOnly defaultValue={format(selectedDate, dayDateFormat)} />
               </Col>
            </Form.Row>
         </Form>
         </Modal.Body>
      </Modal>
   );
};

export default CalendarForm;
