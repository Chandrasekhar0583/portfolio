import React from "react";
import Card from "react-bootstrap/Card";
import { FaGraduationCap } from "react-icons/fa";

function EducationCards(props) {
  return (
    <Card className="education-card-view">
      <Card.Body>
        <FaGraduationCap size={50} style={{ color: "rgba(231, 50, 255, 0.91)" }} />
        <Card.Title style={{ color: "rgba(231, 50, 255, 0.91)", marginTop: "10px" }}>
          {props.degree}
        </Card.Title>
        <Card.Subtitle style={{ textAlign: "center" }}>{props.institution}</Card.Subtitle>
        <Card.Text style={{ textAlign: "center" }}>
          <strong style={{ textAlign: "center" }}>Year:</strong> {props.year} <br />
          <strong style={{ textAlign: "center" }}>Grade:</strong> {props.grade}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default EducationCards;
