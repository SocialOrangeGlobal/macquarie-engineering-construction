'use client';

import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  className?: string;
}

export default function Typewriter({
  words,
  typingSpeed = 150,
  deletingSpeed = 80,
  pauseTime = 2500,
  className = '',
}: TypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleType = () => {
      const fullWord = words[currentWordIndex];

      if (isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
      }

      let typeSpeed = isDeleting ? deletingSpeed : typingSpeed;

      // If word is fully typed
      if (!isDeleting && currentText === fullWord) {
        typeSpeed = pauseTime;
        setIsDeleting(true);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        typeSpeed = 400; // Small pause before typing next word
      }

      timer = setTimeout(handleType, typeSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={className}>
      {currentText}
      <span className="typewriter-cursor"></span>
    </span>
  );
}
