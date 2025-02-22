import React, { useState, useEffect } from "react";
import "./type.css"
function Type() {
  const strings = [
    "Software Developer",
    "Freelancer",
    "MERN Stack Developer",
    "Mobile App Developer",
  ];
  
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = strings[index];

    const typingSpeed = isDeleting ? 50 : 100; // Faster delete speed
    const nextCharIndex = isDeleting ? charIndex - 1 : charIndex + 1;

    if (!isDeleting && charIndex === currentText.length) {
      setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((index + 1) % strings.length);
    }

    const timeout = setTimeout(() => {
      setText(currentText.substring(0, nextCharIndex));
      setCharIndex(nextCharIndex);
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting]);

  return (
    <span className="typewriter-text">{text}<span className="cursor">|</span></span>
  );
}

export default Type;
