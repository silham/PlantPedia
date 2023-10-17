import React from 'react'

const Formatter = (text: string) => {
    text = text.replace(/\n/g, '<br>');
  text = text.replace(/\*/g, '&#x2022;');
  text = text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
  return text;
}

export default Formatter