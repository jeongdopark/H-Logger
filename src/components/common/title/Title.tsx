import { S } from "./styled";

interface ITitle {
  title: string;
  size: "XS" | "S" | "M" | "L" | "XL" | "XXL";
}

const Title = ({ title, size }: ITitle) => {
  return <S.Title size={size}>{title}</S.Title>;
};

export default Title;
