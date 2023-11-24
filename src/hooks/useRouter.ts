import { useNavigate } from "react-router-dom";
import { PATH_NUMBER } from "../const/path";
const useRouter = () => {
  const navigate = useNavigate();
  const routerHandler = (num: number) => {
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
    }
  };
  return [routerHandler];
};

export default useRouter;
