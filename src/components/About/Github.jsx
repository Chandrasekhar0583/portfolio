import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  const [blockSize, setBlockSize] = useState(15);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setBlockSize(5);
      } else {
        setBlockSize(14);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="Chandrasekhar0583"
        blockSize={blockSize}
        blockMargin={4}
        color="#c084f5"
        fontSize={14}
      />
    </Row>
  );
}

export default Github;
