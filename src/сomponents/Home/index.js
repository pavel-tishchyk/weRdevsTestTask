import React from 'react';
import { connect } from 'react-redux';
import { setSelectedDate } from '../../actions/calendar';
import { Container, Row, Col } from 'react-bootstrap';
import Calendar from '../Calendar';
import Form from '../Form';

const Home = ({ selectedDate, setSelectedDate }) => {
  const [show, setShow] = React.useState(false);
  
  const handleClose = () => setShow(false);

  return (
    <Container className='home'>
      <Row className='justify-content-end'>
        <Col xs={12} lg={4} xl={3} className='home-banner'>
            <Row xs={12} className='banner-content text-lg-left'>
              <h1 className='banner-title'>Choose the day for the meeting</h1>
              <p className='banner-text'>
                We encourage you to book your appointment online. This will save you time.
              </p>
            </Row>
        </Col>
        <Col xs={12} lg={5} xl={4} className='home-calendar'>
          <Row xs={12} className='calendar justify-content-center'>
            <Calendar
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              setShow={setShow}
            />
          </Row>
        </Col>
      </Row>
      <Form
        show={show}
        handleClose={handleClose}
        selectedDate={selectedDate}
      />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  selectedDate: state.calendar.selectedDate
})

export default connect(mapStateToProps, { setSelectedDate })(Home);
