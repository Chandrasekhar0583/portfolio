import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificationCard from "./CertificationCard";
import Particle from "../Particle";
import redhatLogo from "../../assets/Certifications/redhat.jpeg";
import javaLogo from "../../assets/Certifications/ITSpecialist.jpeg";
import ccnaLogo from "../../assets/Certifications/networking.jpeg";

function Certifications() {
  return (
    <Container fluid className="certification-section">
      <Particle />
      <Container>
        <h1 className="certification-heading">
          My <strong className="purple">Professional Certifications</strong>
        </h1>
        <p style={{ color: "white" }}>
          Certifications that showcase my technical expertise and skills.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="certification-card">
            <CertificationCard
              imgPath={redhatLogo}
              title="Red Hat Certification"
              description="Earned Red Hat certification showcasing expertise in Linux system administration, including configuring, managing, and troubleshooting enterprise environments."
            />
          </Col>

          <Col md={4} className="certification-card">
            <CertificationCard
              imgPath={javaLogo}
              title="IT Specialist - Java"
              description="Achieved IT Specialist certification in Java, demonstrating proficiency in object-oriented programming, data structures, and application development using Java."
            />
          </Col>

          <Col md={4} className="certification-card">
            <CertificationCard
              imgPath={ccnaLogo}
              title="CCNA - Introduction to Networking"
              description="Completed CCNA Introduction to Networking, gaining a strong foundation in networking concepts, IP addressing, routing, and switching."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;
