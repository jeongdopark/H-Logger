import { S } from "./styled";
import { useState } from "react";
import { IMission } from "../../types/mission";
import { useParams } from "react-router-dom";
import { dateFormat } from "../../utils/dateFormat";
import { findMidDate } from "../../utils/findMidDate";
import Input from "../../components/common/input/Input";
import Toast from "../../components/toast";
import Button from "../../components/common/button/Button";
import useToast from "../../hooks/useToast";
import DatePicker from "../../components/mission/DatePicker";
import useMovePage from "../../hooks/useMovePage";
import useCreateMissionMutation from "../../hooks/mutation/usePostMissionMutation";
import { PATH_NUMBER } from "../../const/path";

export interface IFormData {
  title: string;
  current_weight: number | "";
  goal_weight: number | "";
  goal_exercise_count: number | "";
}

const Mission = () => {
  const [routerHandler] = useMovePage();
  const { mutate } = useCreateMissionMutation();
  const { id } = useParams() as { id: string };
  const [formData, setFormData] = useState<IFormData>({
    title: "",
    current_weight: "",
    goal_weight: "",
    goal_exercise_count: "",
  });
  const { title, current_weight, goal_weight, goal_exercise_count } = formData;
  const [endDate, setEndDate] = useState<Date>();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitHandler = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    const mid = findMidDate(id, dateFormat(endDate!));
    const period = {
      start: id,
      end: dateFormat(endDate!),
      mid,
    };
    const submitData: IMission = { ...formData, exercise_count: 0, period };
    mutate(submitData, {
      onSuccess: () => {
        useToast({ content: <Toast text="미션 등록" type="SUCCESS" /> });
        routerHandler({ num: PATH_NUMBER.CALENDAR });
      },
      onError: () => {
        useToast({ content: <Toast text="등록 실패" type="FAIL" /> });
      },
    });
  };
  return (
    <S.MissionContainer>
      <S.MissionFormContainer onSubmit={submitHandler}>
        <Input
          name="title"
          title="미션 제목"
          size="L"
          placeholder="미션 제목을 입력하세요."
          value={title}
          onChange={onChange}
        />
        <DatePicker startDate={id} endDate={endDate} setEndDate={setEndDate} />
        <S.WeightWrapper>
          <Input
            name="current_weight"
            title="현재 몸무게"
            size="L"
            placeholder="현재 몸무게를 입력하세요."
            value={current_weight}
            onChange={onChange}
          />
          <Input
            name="goal_weight"
            title="목표 몸무게"
            size="L"
            placeholder="목표 몸무게를 입력하세요."
            value={goal_weight}
            onChange={onChange}
          />
        </S.WeightWrapper>
        <Input
          name="goal_exercise_count"
          title="목표 운동 횟수"
          size="L"
          placeholder="목표 운동 횟수를 입력하세요."
          value={goal_exercise_count}
          onChange={onChange}
        />
        <S.ButtonWrapper>
          <Button text="미션 생성" size="XL" />
        </S.ButtonWrapper>
      </S.MissionFormContainer>
    </S.MissionContainer>
  );
};

export default Mission;
