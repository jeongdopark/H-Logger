import { PATH_NUMBER } from "../const/path";
import { ToastContext } from "../context/ToastProvider";
import useMovePage from "../hooks/useMovePage";
import { useContext, useEffect } from "react";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { addToast } = useContext(ToastContext);
  const [routerHandler] = useMovePage();
  const UID = !!localStorage.getItem("uid");

  useEffect(() => {
    if (!UID) {
      addToast("FAIL", "로그인이 필요합니다.");
      routerHandler({ num: PATH_NUMBER.LANDING });
    }
  }, []);
  return children;
};

export default AuthGuard;
