import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';

const WeeklyCalendar = () => {
    const [events, setEvents] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [newEvent, setNewEvent] = useState({ day: '', title: '' });

    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const handleAddEvent = () => {
        if (!newEvent.day || !newEvent.title) return;
        const updatedEvents = { ...events };
        updatedEvents[newEvent.day] = [...(updatedEvents[newEvent.day] || []), newEvent.title];
        setEvents(updatedEvents);
        setShowModal(false);
    };

    const handleDeleteEvent = (day, index) => {
        const updatedEvents = { ...events };
        updatedEvents[day].splice(index, 1);
        setEvents(updatedEvents);
    };

    return (
        <Container>
            <Row className="mb-3">
                {daysOfWeek.map(day => (
                    <Col key={day}>
                        <h5>{day}</h5>
                        <ul>
                            {events[day]?.map((event, index) => (
                                <li key={index}>
                                    {event} <Button variant="danger" size="sm" onClick={() => handleDeleteEvent(day, index)}>Delete</Button>
                                </li>
                            ))}
                        </ul>
                    </Col>
                ))}
            </Row>
            <Button onClick={() => setShowModal(true)}>Add Event</Button>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a New Event</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Day</Form.Label>
                            <Form.Select aria-label="Select a day" value={newEvent.day} onChange={(e) => setNewEvent({...newEvent, day: e.target.value})}>
                                <option>Select a Day</option>
                                {daysOfWeek.map(day => (
                                    <option key={day} value={day}>{day}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Event Title</Form.Label>
                            <Form.Control type="text" placeholder="Choose a title" value={newEvent.title} onChange={(e) => setNewEvent({...newEvent, title: e.target.value})} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
                    <Button variant="primary" onClick={handleAddEvent}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default WeeklyCalendar;