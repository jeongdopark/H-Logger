import { S } from "./styled";
import Title from "../title/Title";

interface IProps {
  title: string;
  options: string[];
  size: "L" | "M" | "S" | "XL";
}

const Selector = ({ title, options, size }: IProps) => {
  return (
    <S.SelectorContainer>
      <Title title={title} size="S" />
      <S.Selector size={size}>
        {options.map((elem: string, idx: number) => (
          <S.Option key={idx}>{elem}</S.Option>
        ))}
      </S.Selector>
    </S.SelectorContainer>
  );
};

export default Selector;
