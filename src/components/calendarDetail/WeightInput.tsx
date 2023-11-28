import Button from "../common/button/Button";
import Input from "../common/input/Input";

const WeightInput = () => {
  return (
    <>
      <Input title="몸무게" placeholder="몸무게를 입력해 주세요." size="M" />
      <Button text="입력" size="S" />
    </>
  );
};

export default WeightInput;
