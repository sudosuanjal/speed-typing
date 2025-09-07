interface GeneratedTextProps {
  words: string;
}
const GeneratedText = ({ words }: GeneratedTextProps) => {
  return <div className="text-slate-500">{words}</div>;
};

export default GeneratedText;
