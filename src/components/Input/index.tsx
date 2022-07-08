import { Input } from "../../styles/Styles";

interface InputFieldProps {
  placeholder: string;
  handlChange: any;
  value: string;
  id?: string;
}

const InputField = ({
  placeholder,
  handlChange,
  value,
  id,
}: InputFieldProps) => {
  return (
    <Input
      placeholder={placeholder}
      value={value}
      name={id}
      maxLength={60}
      onChange={handlChange}
    />
  );
};

export default InputField;
