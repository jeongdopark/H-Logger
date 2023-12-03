import { S } from "./styled";
import { useParams } from "react-router-dom";
import Input from "../../components/common/input/Input";
import Button from "../../components/common/button/Button";
import DatePicker from "../../components/mission/DatePicker";

const Mission = () => {
  const { id } = useParams() as { id: string };
  console.log(id);

  return (
    <S.MissionContainer>
      <S.MissionFormContainer>
        <Input title="미션 제목" size="L" placeholder="미션 제목을 입력하세요." />
        <DatePicker startDate={id} />
        <S.WeightWrapper>
          <Input title="현재 몸무게" size="L" placeholder="현재 몸무게를 입력하세요." />
          <Input title="목표 몸무게" size="L" placeholder="목표 몸무게를 입력하세요." />
        </S.WeightWrapper>
        <Input title="목표 운동 횟수" size="L" placeholder="목표 운동 횟수를 입력하세요." />
        <S.ButtonWrapper>
          <Button text="미션 생성" size="XL" />
        </S.ButtonWrapper>
      </S.MissionFormContainer>
    </S.MissionContainer>
  );
};

export default Mission;
