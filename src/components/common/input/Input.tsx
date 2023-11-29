import Title from "../title/Title";
import { S } from "./styled";

interface IProps {
  title: string;
  placeholder: string;
  size: "L" | "M" | "S" | "XL";
}

const Input = ({ title, size, placeholder }: IProps) => {
  return (
    <S.Container>
      <Title title={title} size="S" />
      <S.Input placeholder={placeholder} size={size}></S.Input>
    </S.Container>
  );
};

export default Input;
