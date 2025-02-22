import React from "react";
import { Col, Row } from "react-bootstrap";
// import { SiVisualStudiocode, SiGithub, SiNpm } from "react-icons/si"; // Importing VSCode, GitHub, and NPM icons
import { SiVscodium, SiGithub, SiNpm } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVscodium />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNpm />
      </Col>
    </Row>
  );
}

export default Toolstack;
