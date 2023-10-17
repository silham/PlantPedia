import React from "react";

const TextShorter = (text: string, letters: number) => {
  if (text.length > letters) {
    return text.slice(0, letters - 2) + "...";
  } else {
    return text;
  }
};

export default TextShorter;
