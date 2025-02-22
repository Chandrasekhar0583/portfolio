import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import DatabaseConnection from "../../Assets/Projects/databaseconnection.jpeg"
import NotifyNation from "../../Assets/Projects/notifynation.jpg"
import RecipeFinder from "../../Assets/Projects/recipefinder.jpg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NotifyNation}
              isBlog={false}
              title="NotifyNation"
              description="Built a web app using React, MongoDB, and Node.js for job registration and hall ticket downloads. Designed an interactive dashboard with email-based test results and resources. Added download options for application forms, admit cards, and test results for enhanced user convenience."
              ghLink="https://github.com/Chandrasekhar0583/NotifyNation"
            // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RecipeFinder}
              isBlog={false}
              title="RecipeFinder"
              description="Developed a responsive website using HTML, CSS, and JavaScript. Integrated recipe videos and step-by-step instructions for an enhanced user experience. Added a special admin button to allow administrators to add new recipes and tasks to the platform."
              ghLink="https://github.com/Chandrasekhar0583/Recipe-Finder/tree/main/RecipeFinder-main"
              demoLink="https://recipe-finder-uyr5-git-main-chandrasekhars-projects-b3b942ca.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DatabaseConnection}
              isBlog={false}
              title="DatabaseConnection"
              description="Built a Java GUI for MySQL database management using Swing and AWT. Enabled users to list databases, retrieve data, and view it in a user-friendly tabular format. Designed to simplify database interactions, making it accessible for non-technical users."
            // ghLink="https://github.com/soumyajit4419/Editor.io"
            // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
