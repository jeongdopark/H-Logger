import Title from "../title/Title";
import { S } from "./styled";

interface IProps {
  title: string;
  placeholder: string;
  size: "L" | "M" | "S" | "XL";
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({ title, size, placeholder, value, setValue }: IProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <S.Container>
      <Title title={title} size="S" />
      <S.Input placeholder={placeholder} size={size} value={value} onChange={onChange}></S.Input>
    </S.Container>
  );
};

export default Input;
