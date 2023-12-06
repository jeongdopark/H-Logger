import useMovePage from "../useMovePage";
import useToast from "../useToast";
import Toast from "../../components/toast";
import { PATH_NUMBER } from "../../const/path";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";
import { checkUserExist } from "../../utils/checkUserExist";
import { createUserDoc } from "../../utils/createUserDoc";
import useScrollLock from "../useScrollLock";

const useLogin = () => {
  const [routerHandler] = useMovePage();
  const { openScroll } = useScrollLock();
  const { setIsLogin } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    openScroll();
    const provider = new GoogleAuthProvider(); // provider 구글 설정
    signInWithPopup(auth, provider) // 팝업창 띄워서 로그인
      .then(async ({ user }) => {
        const isUser = await checkUserExist(user.uid);
        // 신규 유저일 경우
        if (!isUser) {
          createUserDoc({
            uid: user.uid,
            userData: { displayName: user.displayName!, email: user.email!, photoURL: user.photoURL!, uid: user.uid },
          });
        }
        localStorage.setItem("uid", user.uid);
        setIsLogin(true);
        routerHandler({ num: PATH_NUMBER.CALENDAR });
        useToast({ content: <Toast text="로그인 성공" type="SUCCESS" /> });
      })
      .catch((err) => {
        alert("로그인 실패");
        console.log(err);
        useToast({ content: <Toast text="로그인 실패" type="FAIL" /> });
      });
  };

  return [handleGoogleLogin];
};

export default useLogin;
