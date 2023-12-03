import Title from "../title/Title";
import { ReactNode } from "react";
import { S } from "./styled";

interface IProps<T> {
  title: string;
  placeholder: string;
  size: "L" | "M" | "S" | "XL";
  value: string | number;
  setValue: React.Dispatch<React.SetStateAction<T>>;
}

const Input = <T extends ReactNode>({ title, size, placeholder, value, setValue }: IProps<T>) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value as T);
  };
  return (
    <S.Container>
      <Title title={title} size="S" />
      <S.Input placeholder={placeholder} size={size} value={value} onChange={onChange}></S.Input>
    </S.Container>
  );
};

export default Input;
