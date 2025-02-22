import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/22A91A0583.png";
// import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
      <Row>
  <Col md={8} className="home-about-description">
    <h1 style={{ fontSize: "2.6em" }}>
      LET ME <span className="purple"> INTRODUCE </span> MYSELF
    </h1>
    
    <p className="home-about-body">
      I'm a full-stack developer passionate about creating dynamic web and mobile apps. I specialize in building applications using 
      <i>
        <b className="purple"> React.js </b> and <b className="purple"> React Native</b>.
      </i>
      <br />
      <br />
      I'm proficient in
      <i>
        <b className="purple"> JavaScript, Java</b>
      </i>
      <br />
      <br />
      I focus on building scalable backends with
      <i>
        <b className="purple"> Node.js </b> and <b className="purple"> Express.js</b>,
      </i> while ensuring smooth frontend-backend integration with
      <i>
        <b className="purple"> RESTful APIs</b> 
      </i>
      <br />
      <br />
      I enjoy solving complex problems and building products that offer real value to users.
    </p>
  </Col>
  <Col md={4} className="d-flex justify-content-center my-4">
    <div>
      <img src={myImg} className="img-fluid  rounded-circle" alt="avatar" />
    </div>
  </Col>
  
</Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Chandrasekhar0583"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/chandra-sekhar-majji-543b72288/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
