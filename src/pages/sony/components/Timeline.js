import React from "react";
import "./Timeline.scss";
import { Container, Row, Col } from "react-grid-system";
import { spacer1, spacer2, spacer3, spacer4 } from "./constants";

function Timeline() {
  return (
    <div className="timeline-bg">
      <div className="container">
        <Container>
          <Row>
            <Col>
              <h2 className="header-dark">Timeline</h2>
            </Col>
          </Row>
          <Row className="about-row">
            <Col sm={2}>
              <h3 className="timeline-title">Kickoff</h3>
              <h4 className="timeline-date">Nov 10</h4>
            </Col>
            <Col sm={10}>
              <p className="paragraph-text-dark">
                We’ll distribute headphones and help you set up your accounts to
                properly pair off your headphones. Join human factors engineers
                at Sony as they share stories about their work, and walk you
                through how they conduct expert reviews on headphones at Sony.
                There will be a group activity to get you started.
              </p>
            </Col>
          </Row>
          <Row className="about-row">
            <Col sm={2}>
              <h3 className="timeline-title">Headphones UX Review</h3>
              <h4 className="timeline-date">Nov 10 - 19</h4>
            </Col>
            <Col sm={10}>
              <p className="paragraph-text-dark">
                Throughout the week, take digital notes of the findings you
                discover from using the headphones. Take photos and videos to
                help support your findings, describe your usage and how it
                changes, and document other novel findings, while using an
                Expert Review Guide provided by the human factors engineers at
                Sony.
              </p>
            </Col>
          </Row>
          <Row className="about-row">
            <Col sm={2}>
              <h3 className="timeline-title">Debrief & Ideate</h3>
              <h4 className="timeline-date">Nov 19</h4>
            </Col>
            <Col sm={10}>
              <p className="paragraph-text-dark">
                Consolidate your findings with your headphones and compete in an
                ideation exercise. Ask questions, learn about opportunities, and
                network with members of Sony’s human factors team.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Timeline;
