import { Input } from "../../styles/Styles";

interface InputFieldProps {
  placeholder: string;
  setUsername: any;
  name: string;
}

const InputField = ({ placeholder, setUsername, name }: InputFieldProps) => {
  return (
    <Input
      placeholder={placeholder}
      value={name}
      maxLength={60}
      onChange={(e) => setUsername(e.target.value)}
    />
  );
};

export default InputField;
