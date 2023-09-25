import { useState } from "react";

function useText() {
  const [text, setText] = useState("");

  const setTextValue = (newText) => {
    setText(newText);
  };

  const updateText = (newText) => {
    setText(newText);
  };

  return {
    text,
    setTextValue,
    updateText,
  };
}

export default useText;
