import { useEffect } from 'react';

const VoiceChat = () => {
  useEffect(() => {
    const synth = window.speechSynthesis;
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.onresult = (e) => {
      const text = e.results[e.resultIndex][0].transcript.toLowerCase();
      if (text.includes('who are you')) {
        const utterance = new SpeechSynthesisUtterance("I'm your portfolio assistant, built by Shubham.");
        synth.speak(utterance);
      } else if (text.includes('projects')) {
        synth.speak(new SpeechSynthesisUtterance("Let me tell you about Shubham's top projects."));
      }
    };

    recognition.start();

    return () => recognition.stop();
  }, []);

  return null;
};

export default VoiceChat;
