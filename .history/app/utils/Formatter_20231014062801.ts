const Formatter = (text: string) => {
    text = text.replace(/\n/g, '<br />');
    text = text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
    text = text.replace(/\*/g, '&#x2022;');
    return text;
}

export default Formatter