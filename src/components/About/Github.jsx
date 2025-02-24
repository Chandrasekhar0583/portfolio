import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  const [blockSize, setBlockSize] = useState(15);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setBlockSize(6); // Adjust block size for mobile
      } else {
        setBlockSize(12);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Git <strong className="purple">Stat</strong>
      </h1>

      {/* Directly apply styling without extra divs */}
      <GitHubCalendar
        username="Chandrasekhar0583"
        blockSize={blockSize}
        blockMargin={4}
        color="#c084f5"
        fontSize={14}
        style={{ width: "100%", overflowX: "auto" }} // Ensures built-in scroll works
      />
    </Row>
  );
}

export default Github;
