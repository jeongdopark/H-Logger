import { S } from "./styled";
import Title from "../title/Title";
import React from "react";

interface IProps {
  title: string;
  options: string[];
  setExerciseTime: React.Dispatch<React.SetStateAction<string>>;
  size: "L" | "M" | "S" | "XL";
}

const Selector = ({ title, options, size, setExerciseTime }: IProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setExerciseTime(event.target.value);
  };
  return (
    <S.SelectorContainer>
      <Title title={title} size="S" />
      <S.Selector size={size} onChange={handleChange}>
        {options.map((elem: string, idx: number) => (
          <S.Option key={idx}>{elem}</S.Option>
        ))}
      </S.Selector>
    </S.SelectorContainer>
  );
};

export default Selector;
