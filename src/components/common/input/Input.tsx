import Title from "../title/Title";
import { S } from "./styled";

interface IProps {
  title: string;
  placeholder: string;
  size: "L" | "M" | "S" | "XL";
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}

const Input = ({ title, size, placeholder, value, onChange, name }: IProps) => {
  return (
    <S.Container>
      <Title title={title} size="S" />
      <S.Input name={name} placeholder={placeholder} size={size} value={value} onChange={onChange}></S.Input>
    </S.Container>
  );
};

export default Input;
