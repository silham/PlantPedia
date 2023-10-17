const Formatter = (text: string) => {
    text = text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
    text = text.replace(/\n\*/g, '<br />&#9673;');
    text = text.replace(/\n/g, '<br />');
    return text;
}

export default Formatter