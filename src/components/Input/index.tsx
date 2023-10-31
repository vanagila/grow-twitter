import { InputHTMLAttributes } from "react";
import { InputGroup } from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  type?: string;
  label: string;
  id?: string;
}

export const Input = ({ value, type, label, id, ...rest }: InputProps) => {
  return (
    <InputGroup>
      <label htmlFor={id}>{label}:</label>
      <input type={type || "text"} value={value} id={id} />
    </InputGroup>
  );
};
