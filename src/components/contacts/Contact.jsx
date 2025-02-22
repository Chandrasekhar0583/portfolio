import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Particle from "../Particle";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Contact = () => {

  const form = useRef();
  const [done, setDone] = useState(false);
  const [notDone, setNotDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setDone(false);
    setNotDone(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.from_name || !formData.reply_to || !formData.message) {
      setNotDone(true);
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    form.current,
    import.meta.env.VITE_EMAILJS_PUBLIC_LINK,
  )
      .then(
        () => {
          setDone(true);
          setFormData({ from_name: "", reply_to: "", message: "" }); // Reset form
        },
        (error) => {
          console.error("Error sending email:", error);
          setNotDone(true);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <Container style={{ paddingTop: "50px", marginTop: "50px" }} fluid className="contact-form">
      <Particle />
      <Row>
        <Col md={8} className="c-left">
          <h1>Get in Touch</h1>
          <h1 className="purple">Contact me</h1>
        </Col>
        <Col md={1} className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="from_name"
              className="user"
              placeholder="Name"
              value={formData.from_name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="reply_to"
              className="user"
              placeholder="Email"
              value={formData.reply_to}
              onChange={handleChange}
            />
            <textarea
              name="message"
              className="user"
              placeholder="Message"
              value={formData.message}  
              onChange={handleChange}
            />

            {notDone && <span className="not-done">Please fill all the fields correctly.</span>}
            <Button type="submit" className="button" disabled={loading || done}>
              {loading ? "Sending..." : "Send"}
            </Button>
            {done && (
              <span className="done">
                Thanks for reaching out! I have received your message and will get back to you as soon as possible. If this is a test, the functionality is working fine. Feel free to contact me on LinkedIn.
              </span>
            )}
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
