import styled from "styled-components";

interface InputFieldProps {
  placeholder: string;
  setUsername: any;
  name: string;
}
const Input = styled.input`
  border: 1px solid black;
  font-size: large;
  margin-top: 24px;
  background: none;
  border-radius: 6px;
  padding: 6px;
  width: 400px;
  :focus {
    outline: none;
  }
`;
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
