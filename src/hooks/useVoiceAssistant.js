const useVoiceAssistant = () => {
    const speak = (text) => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1;
      utterance.pitch = 1;
      window.speechSynthesis.speak(utterance);
    };
  
    return speak;
  };
  
  export default useVoiceAssistant;
  