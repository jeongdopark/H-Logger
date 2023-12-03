import { S } from "./styled";

interface IProps {
  text: string;
  size: "L" | "S";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ text, onClick, size }: IProps) => {
  return (
    <S.Button onClick={onClick} size={size}>
      {text}
    </S.Button>
  );
};

export default Button;
