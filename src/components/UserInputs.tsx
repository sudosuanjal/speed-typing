interface UserInputsProps {
  words: string;
}

const UserInputs = ({ words }: UserInputsProps) => {
  return <div className="absolute inset-0 text-blue-500">{words}</div>;
};

export default UserInputs;
