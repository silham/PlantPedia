import React from 'react'

const Formatter = (text: string) => {
    text = text.replace(/\n/g, '<br>');

  // Replace all asterisk characters with `<li>` tags.
  text = text.replace(/\*/g, '<li>');

  // Wrap all words enclosed in double asterisks in `<b>` tags.
  text = text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');

  // Return the formatted text string.
  return text;
}

export default Formatter