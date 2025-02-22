import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
  <blockquote className="blockquote mb-0">
    <p style={{ textAlign: "justify" }}>
      Hi Everyone, I am <span className="purple">Majji Chandra Sekhar</span>
      from <span className="purple"> Kakinada, India.</span>
      <br />
      I am currently a 3rd-year B.Tech student at Aditya University, pursuing my degree in Computer Science.
      <br />
      I have a strong passion for software development and I enjoy exploring new technologies.
      <br />
      <br />
      Apart from coding, here are a few activities that I love to do!
    </p>
    <ul>
      <li className="about-activity">
        <ImPointRight /> Playing Cricket
      </li>
      <li className="about-activity">
        <ImPointRight /> Watching Movies
      </li>
      <li className="about-activity">
        <ImPointRight /> Travelling
      </li>
    </ul>

    <p style={{ color: "rgb(155 126 172)" }}>
      "Building, learning, and growing every day."
    </p>
    <footer className="blockquote-footer">Chandra Sekhar</footer>
  </blockquote>
</Card.Body>

    </Card>
  );
}

export default AboutCard;
