import React from "react";
import { Form, Row, Col, Container, Button } from "react-bootstrap";
import "./projectInformation.css";

const ProjectInformation = () => {
  /*const handleClient = () => {
    setClient(!client);
  }; */

  return (
    <div>
      <Container>
        <Form className="form-container">
          <Form.Group as={Row} controlId="report-title" className="form-group">
            <Form.Label column sm={3}>
              Report Title
            </Form.Label>
            <Col sm={6}>
              <Form.Control type="text" className="form-control" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="client" className="form-group">
            <Form.Label column sm={3}>
              Client
            </Form.Label>
            <Col sm={6}>
              <Form.Control
                type="text"
                className="form-control"
                style={{
                  fontSize: "15px",
                }}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="job-election" className="mt-3">
            <Form.Label column sm={3}>
              Job Selection
            </Form.Label>
            <Col sm={6}>
              <select className="form-control form-select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="job-election" className="mt-3">
            <Form.Label column sm={3}>
              Are there any other job codes related to this engagement
            </Form.Label>
            <Col sm={6}>
              <select className="form-control form-select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            controlId="additional-jobs"
            className="form-group">
            <Form.Label column sm={3}>
              Additional jobs to roll forward
            </Form.Label>
            <Col sm={6}>
              <Button>+</Button>
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            controlId="engagement-partner"
            className="form-group">
            <Form.Label column sm={3}>
              Engagement Partner
            </Form.Label>
            <Col sm={6}>
              <Form.Control type="text" />
            </Col>
            <Col sm={3}>
              <span>Business: </span>
              <span>Cell: </span>
              <span>Office: </span>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="job-election" className="mt-3">
            <Form.Label column sm={3}>
              Do you want this workflow to go through the
            </Form.Label>
            <Col sm={6}>
              <select className="form-control form-select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            controlId="engagement-manager"
            className="form-group">
            <Form.Label column sm={3}>
              Engagement Manager
            </Form.Label>
            <Col sm={6}>
              <Form.Control type="text" />
            </Col>
            <Col sm={3}>
              <span>Business: </span>
              <span>Cell: </span>
              <span>Office: </span>
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            controlId="other-team-members"
            className="form-group">
            <Form.Label column sm={3}>
              Other Engagement Team Members
            </Form.Label>
            <Col sm={6}>
              <Form.Control type="text" />
            </Col>
            <Col sm={3}>
              <span>Business: </span>
              <span>Cell: </span>
              <span>Office: </span>
            </Col>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
};

export default ProjectInformation;

/* 

<Container>
        <Form>
          <Form.Group as={Row} controlId="report-title">
            <Form.Label column sm={2}>
              Report Title
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="client">
            <Form.Label column sm={2}>
              Client
            </Form.Label>
            <Col sm={10}>
            <span onMouseOver={() => setClient(true)} onMouseLeave={() => setClient(false)} style={{border: "2px solid black", borderRadius: "20%", padding: "1px 8px"}}>i</span>
              {client && <span>Search by client name or number</span>}
              <Form.Control type="text" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="job-election">
            <Form.Label column sm={2}>
              Job Selection
            </Form.Label>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Row} controlId="job-codes">
            <Form.Label column sm={2}>
              Are there any other job codes related to this engagement
            </Form.Label>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Row} controlId="additional-jobs">
            <Form.Label column sm={2}>
              Additional jobs to roll forward
            </Form.Label>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button onClick={handleAdditionalJobs}>+</Button>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="engagement-partner">
            <Form.Label column sm={2}>
              Engagement Partner
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" />
              <span>Business: </span>
              <span>Cell: </span>
              <span>Office: </span>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="partner-review">
            <Form.Label column sm={2}>
              Do you want this workflow to go through the 'Initial Partner
              Review' step?
            </Form.Label>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Row} controlId="engagement-manager">
            <Form.Label column sm={2}>
              Engagement Manager
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" />
              <span>Business: </span>
              <span>Cell: </span>
              <span>Office: </span>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="other-team-members">
            <Form.Label column sm={2}>
              Other Engagement Team Members
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" />
              <span>Business: </span>
              <span>Cell: </span>
              <span>Office: </span>
            </Col>
          </Form.Group>
        </Form>
      </Container>
*/
