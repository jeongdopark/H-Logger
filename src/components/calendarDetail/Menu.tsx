import { S } from "./styled";

interface IProps {
  menu: string;
  onClick?: (e: React.MouseEvent) => void;
}

const Menu = ({ menu, onClick }: IProps) => {
  return <S.Menu onClick={onClick}>{menu}</S.Menu>;
};

export default Menu;
