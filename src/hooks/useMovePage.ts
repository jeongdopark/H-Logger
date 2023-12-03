import { useNavigate } from "react-router-dom";
import { PATH_NUMBER } from "../const/path";

interface IArg {
  num: number;
  dayFormat?: string;
}

const useMovePage = () => {
  const navigate = useNavigate();
  const routerHandler = ({ num, dayFormat }: IArg) => {
    switch (num) {
      case PATH_NUMBER.LANDING:
        navigate("/");
        break;
      case PATH_NUMBER.CALENDAR:
        navigate("/calendar");
        break;
      case PATH_NUMBER.RECORD:
        navigate("/record");
        break;
      case PATH_NUMBER.CALENDAR_DETAIl:
        navigate(`/calendar/${dayFormat}`);
        break;
      case PATH_NUMBER.MISSION:
        navigate(`/mission/${dayFormat}`);
        break;
    }
  };
  return [routerHandler];
};

export default useMovePage;
