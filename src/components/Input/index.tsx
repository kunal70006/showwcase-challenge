import { Input } from "../../styles/Styles";

interface InputFieldProps {
  placeholder: string;
  handlChange: any;
  value: string;
  id?: string;
  style?: any;
}

const InputField = ({
  placeholder,
  handlChange,
  value,
  id,
  style,
}: InputFieldProps) => {
  return (
    <Input
      placeholder={placeholder}
      value={value}
      name={id}
      maxLength={60}
      onChange={handlChange}
      required
      style={style}
    />
  );
};

export default InputField;
