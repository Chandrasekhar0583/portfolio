import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaJava } from "react-icons/fa"; 
import {  DiNodejs, DiPython, DiMongodb, DiCode } from "react-icons/di";
import { SiExpress, SiMysql } from "react-icons/si";
import { FaReact } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5 />
        <p style={{ fontSize: "20px", marginTop: "5px" }}>HTML5</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3Alt />
        <p style={{ fontSize: "20px", marginTop: "5px" }}>CSS3</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaJsSquare />
        <p style={{ fontSize: "20px", marginTop: "5px" }}>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaReact />
        <p style={{ fontSize: "20px", marginTop: "5px" }}>React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <p style={{ fontSize: "20px", marginTop: "5px" }}>Express.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p style={{ fontSize: "20px", marginTop: "5px" }}>Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <p style={{ fontSize: "20px", marginTop: "5px" }}>MySQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaJava />
        <p style={{ fontSize: "20px", marginTop: "5px" }}>Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p style={{ fontSize: "20px", marginTop: "5px" }}>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCode />
        <p style={{ fontSize: "20px", marginTop: "5px" }}>Programming</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p style={{ fontSize: "20px", marginTop: "5px" }}>MongoDB</p>
      </Col>
    </Row>
  );
}

export default Techstack;
