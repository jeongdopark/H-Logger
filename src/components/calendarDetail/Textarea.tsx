import Input from "../common/input/Input";
import Title from "../common/title/Title";
import { S } from "./styled";
import Button from "../common/button/Button";

interface IProps {
  title: string;
  placeholder: string;
}

const Textarea = ({ title, placeholder }: IProps) => {
  return (
    <S.Form>
      <S.TextareaWrapper>
        <Title title={title} size="M" />
        <S.Textarea placeholder={placeholder} />
      </S.TextareaWrapper>
      <Input title="점수" placeholder="점수를 입력해 주세요" size="L" />
      <Button text="추가" size="S" />
    </S.Form>
  );
};

export default Textarea;
