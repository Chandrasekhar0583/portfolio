import React from "react";
import { Row } from "react-bootstrap";

const LeetCode = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        <strong className="purple">LeetCode</strong> Stats
      </h1>
      <div className="leetcode-container">
        <img
          src="https://leetcard.jacoblin.cool/Chandrasekhar_0583?theme=dark&font=Syne%20Mono&ext=heatmap"
          alt="LeetCode Heatmap"
          className="leetcode-image"
        />
      </div>
    </Row>
  );
};

export default LeetCode;
