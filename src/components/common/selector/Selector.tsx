import { S } from "./styled";
import Title from "../title/Title";
import React, { ReactNode } from "react";

interface IProps<T extends ReactNode> {
  title: string;
  options: T[];
  size: "L" | "M" | "S" | "XL";
  setState: React.Dispatch<React.SetStateAction<T>>;
}

const Selector = <T extends ReactNode>({ title, options, size, setState }: IProps<T>) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setState(event.target.value as T);
  };
  return (
    <S.SelectorContainer>
      <Title title={title} size="S" />
      <S.Selector size={size} onChange={handleChange}>
        {options.map((elem: T, idx: number) => (
          <S.Option key={idx}>{elem}</S.Option>
        ))}
      </S.Selector>
    </S.SelectorContainer>
  );
};

export default Selector;
