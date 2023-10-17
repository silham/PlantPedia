const Formatter = (text: string) => {
    text = text.replace(/\n/g, '<br />');
    text = text.replace(/\*/g, '&#x2022;');
    text = text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
    const innerHTML: HTMLElement = document.createElement('p');
  innerHTML.innerHTML = text;
  return innerHTML;
}

export default Formatter