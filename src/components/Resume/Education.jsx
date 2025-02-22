import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EducationCards from "./EducationCards";

function Education() {
  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Aditya University",
      year: "2020 - 2026",
      grade: "8.34 CGPA"
    },
    {
      degree: "Senior Secondary Education",
      institution: "Narayana Junior College",
      year: "2020 - 2022",
      grade: "91.5%"
    },
    {
      degree: "Secondary Education",
      institution: "Bhashyam High School",
      year: "2016 - 2020",
      grade: "96.67%"
    }
  ];

  return (
    <Container fluid className="education-section">
        <h1 className="project-heading">
          My Academic <strong className="purple">Journey </strong>
        </h1>
      <Row style={{ justifyContent: "center", padding: "20px" }}>
        {educationData.map((edu, index) => (
          <Col md={4} key={index} className="education-card">
            <EducationCards {...edu} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Education;
