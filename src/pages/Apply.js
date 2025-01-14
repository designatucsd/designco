import React from "react";
import { spacer2, spacer3, spacer4 } from "../constants.js";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { faq } from "../faq.js";
import QA from "../components/QA";
import { roles } from "../roles.js";
import Role from "../components/Role";
import { Container, Row, Col } from "react-grid-system";

const faqList = faq.map((item) => (
  <QA question={item.question} answer={item.answer} />
));

const roleList = roles.map((item) => (
  <Role
    team={item.team}
    position={item.position}
    description={item.description}
    duty={item.duty}
    general={item.general}
    offer={item.offer}
    ec={item.ec}
    name={item.name}
    image={item.image}
    q1={item.q1}
    a1={item.a1}
    q2={item.q2}
    a2={item.a2}
    q3={item.q3}
    a3={item.a3}
    q4={item.q4}
    a4={item.a4}
  />
));

class Apply extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showSidePanel: true };
    this.handlePanel = this.handlePanel.bind(this);
  }

  handlePanel() {
    this.setState((state) => ({
      showSidePanel: !state.showSidePanel,
    }));
  }

  render() {
    return (
      <div>
        <Helmet>
          <title> Apply | Design Co </title>
        </Helmet>
        <Navbar color={"#000"} altColor={"#FFF"} from="apply" />
        <Container className="outerContainer" style={{ marginBottom: spacer4 }}>
          <div className="innerContainer">
            <Row>
              <Col md={6}>
                <h1 style={{ marginBottom: spacer2 }}>
                  So many boards, here’s why you should choose ours.
                </h1>
                <p style={{ marginBottom: spacer3 }}>
                  Applications open until Sunday, January 19th at 11:59PM
                </p>
                <Button
                  link="#roles"
                  text="View Open Roles"
                  style={{ marginBottom: spacer4 }}
                ></Button>
              </Col>
              <Col md={6}>
                <img
                  src={require("../images/join/board.gif").default}
                  style={{ width: "100%" }}
                />
              </Col>
            </Row>
          </div>
        </Container>

        <Container className="outerContainer" style={{ marginBottom: spacer2 }}>
          <div className="innerContainer">
            <div style={{ marginBottom: spacer4 }}>
              <p className="steps">1st</p>
              <div className="stepCopy">
                <h1 style={{ marginBottom: spacer2 }}>We're cool people.</h1>
                <p>
                  Like you, we’re aspiring designers. We’re the ones who plan
                  GBMs, Stride, Build Up, Design Frontiers, and all that other
                  cool stuff. At the end of the day we’re tired and our necks
                  are sore from pushing pixels, but we’re students, we’re happy,
                  and we're a family.
                </p>
              </div>
            </div>

            <div style={{ marginBottom: spacer4 }}>
              <p className="steps">2nd</p>
              <div className="stepCopy">
                <h1 style={{ marginBottom: spacer2 }}>
                  You'll get to create impact.
                </h1>
                <p>
                  You’ll get the chance to take part in the planning of 35+
                  events each school year. From a career fair to design sprints,
                  to general workshops and talks, you’ll have the chance to get
                  your hands dirty and do some cool stuff for your design
                  community.
                </p>
              </div>
            </div>

            <div style={{ marginBottom: spacer4 }}>
              <p className="steps">3rd</p>
              <div className="stepCopy">
                <h1 style={{ marginBottom: spacer2 }}>
                  You'll grow (figuratively).
                </h1>
                <p>
                  You’ll get exposed to so many unique opportunities and
                  challenges. Our board is constantly exploring new things,
                  sharing ideas, and experimenting. We fail together and grow
                  together, so come along with us for the journey!
                </p>
              </div>
            </div>
          </div>
        </Container>

        <div className="scrollWrapper" style={{ marginBottom: spacer4 }}>
          <div className="scrollContainer">
            <div className="imageDiv">
              <img src={require("../images/join/12.webp").default} />
              <img src={require("../images/join/13.webp").default} />
              <img src={require("../images/join/11.jpg").default} />
              <img src={require("../images/join/8.jpg").default} />
              <img src={require("../images/join/3.jpg").default} />
              <img src={require("../images/join/4.gif").default} />
              <img src={require("../images/join/9.jpg").default} />
            </div>
          </div>
        </div>

        <Container
          className="outerContainer"
          style={{ marginBottom: spacer3 }}
          id="roles"
        >
          <div className="innerContainer">
            <h1 style={{ marginBottom: spacer3 }}>Open Roles</h1>
            {roleList}
          </div>
        </Container>

        <Container className="outerContainer" style={{ marginBottom: spacer4 }}>
          <div className="innerContainer">
            <div id="faq">
              <div className="container">
                <h1 style={{ marginBottom: spacer3 }}>
                  In case you're wondering (FAQs)
                </h1>
                {faqList}
              </div>
            </div>
          </div>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Apply;
