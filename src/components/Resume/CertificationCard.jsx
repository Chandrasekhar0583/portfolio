import React from "react";
import Card from "react-bootstrap/Card";

function CertificationCard(props) {
  return (
    <Card className="certification-card-view">
      <Card.Img variant="top" style={{ aspectRatio: "1/1", objectFit:"cover" }} src={props.imgPath} alt="certification-img" />
      <Card.Body>
        <Card.Title style={{ color: "rgba(231, 50, 255, 0.91)" }}>
          {props.title}
        </Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CertificationCard;
