const Formatter = (text: string) => {
    text = text.replace(/\n/g, '<br />');
    text = text.replace(/\*\*(.*?)\*\*/g, '<span className="font-semibold">$1</span>');
    text = text.replace(/\*/g, '&#x2022;');
    return text;
}

export default Formatter