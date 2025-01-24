import React, { useState, useEffect } from "react";

const TypeWriter = () => {
  const words = ["Hello, World!", "Welcome to my website!", "I am a  Passionate Programmer", "I am a Frontend Developer", "I am a Backend Developer", "I am a Arch User", "I am a Computer Science Student",];
  const [text, setText] = useState(""); // Holds the text to display
  const [i, setI] = useState(0); // Index of the current word
  const [j, setJ] = useState(0); // Character index within the current word
  const [isDeleting, setIsDeleting] = useState(false); // Whether we're deleting text

  useEffect(() => {
    const currentWord = words[i];

    const typingSpeed = isDeleting ? 50 : 100; // Faster when deleting
    const delay = isDeleting && j === 0 ? 1000 : typingSpeed; // Pause before typing a new word

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText(currentWord.substring(0, j - 1));
        setJ((prev) => prev - 1);
        if (j === 0) {
          setIsDeleting(false);
          setI((prev) => (prev + 1) % words.length); // Move to the next word
        }
      } else {
        setText(currentWord.substring(0, j + 1));
        setJ((prev) => prev + 1);
        if (j === currentWord.length - 1) {
          setIsDeleting(true); // Start deleting
        }
      }
    }, delay);

    // Cleanup timeout on unmount or updates
    return () => clearTimeout(timeout);
  }, [i, j, isDeleting, words]);

  return (
    <div>
      <h2 id="typewriter">{text}</h2>
    </div>
  );
};

export default TypeWriter;
