import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";

export default function Edit({ activityToEdit, editActivity }) {
  const [activity, setActivity] = useState(activityToEdit.description);
  const [type, setType] = useState(activityToEdit.type);
  const [participants, setParticipants] = useState(activityToEdit.participants);
  const [price, setPrice] = useState(activityToEdit.price);
  const [accessibility, setAccessibility] = useState(
    activityToEdit.accessibility
  );

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Edit
      </Button>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit your activity</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              editActivity(
                activityToEdit._id,
                activity,
                type,
                participants,
                price,
                accessibility
              );
              handleClose()
            }}
          >
            <Form.Group className="mb-3">
              <Form.Label htmlFor="activity">Activity:</Form.Label>
              <Form.Control
                onChange={(e) => setActivity(e.target.value)}
                type="text"
                id="activity"
                value={activity}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formType">
              <Form.Label htmlFor="type">Type:</Form.Label>
              <Form.Select
                onChange={(e) => setType(e.target.value)}
                id="type"
                value={type}
              >
                <option value="" disabled selected>
                  Select your option
                </option>
                <option value="education">Education</option>
                <option value="recreational">Recreational</option>
                <option value="social">Social</option>
                <option value="diy">Diy</option>
                <option value="charity">Charity</option>
                <option value="cooking">Cooking</option>
                <option value="relaxation">Relaxation</option>
                <option value="music">Music</option>
                <option value="busywork">Busywork</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="participants">Participants:</Form.Label>
              <Form.Control
                onChange={(e) => setParticipants(e.target.value)}
                type="text"
                id="participants"
                value={participants}
              />
            </Form.Group>
            <Form.Label htmlFor="price">Price:</Form.Label>
            <Form.Control
              onChange={(e) => setPrice(e.target.value)}
              type="text"
              id="price"
              value={price}
            />
            <Form.Group className="mb-3">
              <Form.Label htmlFor="accessibility">Accessibility:</Form.Label>
              <Form.Control
                onChange={(e) => setAccessibility(e.target.value)}
                type="text"
                id="accessibility"
                value={accessibility}
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="danger" type="submit">Save</Button>
              <Button variant="danger" onClick={handleClose}>Cancel</Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
