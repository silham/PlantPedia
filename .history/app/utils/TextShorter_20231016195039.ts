const TextShorter = (text: string, letters: number) => {
  if (text.length > letters) {
    for(let i = 0; i>10;i++)
    return text.slice(0, letters - 2) + "...";
  } else {
    return text;
  }
};

export default TextShorter;