import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import L_LIVTAAR from "../../assets/img/experience/livtaar.png";
import L_BURN from "../../assets/img/experience/burn.png";
import L_PES from "../../assets/img/experience/pes.png";
import L_AIESEC from "../../assets/img/experience/aiesec.png";
import Tilt from "react-tilt";
import "./experience.styles.css";
import Carousel from "react-bootstrap/Carousel";
import ScrollDown from "../../components/scroll-down/scroll-down.component";
import "../../components/my-carousal/my-carousal.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Carousel controls={false} indicators interval={2500} pause={"hover"}>
        <Carousel.Item>
          <Container>
            <Tilt options={{ max: 20 }}>
              <Card>
                <Card.Header
                  as="h5"
                  className="d-flex justify-content-center flex-wrap"
                >
                  <Card.Img
                    variant="top"
                    className="img-resize"
                    src={L_LIVTAAR}
                    alt="Livtaar logo"
                  />
                </Card.Header>
                <Card.Body className="d-flex justify-content-center flex-column">
                  <div>
                    <Card.Title className="text-center">
                      Chief Technical Officer
                    </Card.Title>
                  </div>
                  <div>
                    <Card.Text className="text-center style">
                      <strong>Duration:</strong> July 2020 - Present
                      <br />
                      <strong> Description </strong>
                      <ul className="text-left">
                        <li>
                          <strong>Developed &amp; enhanced</strong> the website
                          independantly, based on the input given by the UI
                          designer.
                        </li>
                        <li>
                          <strong> Assissted the Integration</strong> of
                          external software providers, into the website.
                        </li>
                        <li>
                          <strong>Provided</strong> maintenance, updates and
                          regular security checks.Optimized with SSL
                          certification and SEO.
                        </li>
                        <li>
                          <strong>Developed procedures</strong> and used
                          technology to enhance products and services that focus
                          on external customers as well as internal workflow.
                        </li>
                      </ul>
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Tilt>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <Tilt options={{ max: 25 }}>
              <Card>
                <Card.Header
                  as="h5"
                  className="d-flex justify-content-center flex-wrap"
                >
                  <Card.Img
                    variant="top"
                    className="img-resize"
                    src={L_BURN}
                    alt="Burn logo"
                  />
                </Card.Header>
                <Card.Body className="d-flex justify-content-center flex-column">
                  <div>
                    <Card.Title className="text-center">
                      Web Development
                    </Card.Title>
                  </div>
                  <div>
                    <Card.Text className="text-center style">
                      <strong>Duration:</strong> September 2020 - Present
                      <br />
                      <strong> Description </strong>
                      <ul className="text-left">
                        <li>
                          <strong>Developed &amp; designed</strong> the UI of
                          the website, with visual design elements such as
                          colors and typography based on customer psychology.
                        </li>
                        <li>
                          <strong>Developed</strong> the website
                          independantly,with SSL certification and SEO
                          optimization.
                        </li>
                        <li>
                          <strong>Provided</strong> maintenance, updates and
                          regular security checks.
                        </li>
                        <li>
                          <strong>Innovated</strong> marketing ideas and
                          strategies.
                        </li>
                      </ul>
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Tilt>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <Tilt options={{ max: 25 }}>
              <Card>
                <Card.Header
                  as="h5"
                  className="d-flex justify-content-center flex-wrap"
                >
                  <Card.Img
                    variant="top"
                    className="img-resize"
                    src={L_PES}
                    alt="PES logo"
                  />
                </Card.Header>
                <Card.Body className="d-flex justify-content-center flex-column">
                  <div>
                    <Card.Title className="text-center">
                      Research and Development Intern
                    </Card.Title>
                  </div>
                  <div>
                    <Card.Text className="text-center style">
                      <strong className="body-title-style ">
                        PCB design and implementation
                      </strong>
                      <br />
                      <strong>Duration:</strong> Jan 2020 - March 2020
                      <br />
                      <strong> Description </strong>
                      <ul className="text-left">
                        <li>
                          <strong>Researched &amp; studied</strong> Eagle CAD,
                          and it's various implementations with respect to PCBs.
                        </li>
                        <li>
                          <strong>Design &amp; implementation</strong> of
                          various single and double sided PCBs including the
                          audio amplifier LM386, MAX7219 seven segement driver,
                          phone detector circuit and the TPS61097 step up
                          circuit.
                        </li>
                        <li>
                          <strong>Hardware implementation</strong> of the double
                          sided phone detector PCB was done using the NVIS72
                          prototyping machine.
                        </li>
                        <li>
                          <strong>First</strong> intern to succesfully implement
                          a double sided PCB in the foundation.
                        </li>
                      </ul>
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Tilt>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <Tilt options={{ max: 25 }}>
              <Card>
                <Card.Header
                  as="h5"
                  className="d-flex justify-content-center flex-wrap"
                >
                  <Card.Img
                    variant="top"
                    className="img-resize"
                    src={L_AIESEC}
                    alt="Aiesec logo"
                  />
                </Card.Header>
                <Card.Body className="d-flex justify-content-center flex-column">
                  <div>
                    <Card.Title className="text-center">
                      Global Volunteer Team
                    </Card.Title>
                  </div>
                  <div>
                    <Card.Text className="text-center style">
                      <strong>Duration:</strong> August 2018 - January 2020
                      <br />
                      <strong> Description </strong>
                      <ul className="text-left">
                        <li>
                          AIESEC is an international non-governmental and
                          not-for-profit organization recognized by the UN
                          wherein I worked with diverse, multi-cultural teams to
                          implement the sustainable development goals globally.
                        </li>
                        <li>
                          Part of organizing committee of a national event as VP
                          of public relations.
                        </li>
                      </ul>
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Tilt>
          </Container>
        </Carousel.Item>
      </Carousel>
      <ScrollDown />
    </div>
  );
};

export default Experience;
