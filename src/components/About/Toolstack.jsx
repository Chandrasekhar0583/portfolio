import React from "react";
import { Col, Row } from "react-bootstrap";
// import {Code2} from "lucide-react";
import {VscCode} from "react-icons/vsc"
import {  SiGithub, SiDocker, SiPostman, SiLinux, SiJira } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {[
        { icon: <VscCode/>, name: "VS Code" },
        { icon: <SiGithub />, name: "GitHub" },
        // { icon: <SiDocker />, name: "Docker" },
        // { icon: <SiPostman />, name: "Postman" },
        // { icon: <SiLinux />, name: "Linux" },
        // { icon: <SiJira />, name: "Jira" },
      ].map((tool, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          {tool.icon}
          <p style={{ fontSize: "20px", marginTop: "5px" }}>{tool.name}</p>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
