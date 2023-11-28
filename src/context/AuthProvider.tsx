import { createContext, useMemo, useState } from "react";

// 컨텍스트 타입 정의
interface AuthContextType {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const UID = localStorage.getItem("uid");

export const AuthContext = createContext<AuthContextType>({
  isLogin: false,
  setIsLogin: () => {}, // 여기에 setIsLogin 함수를 추가합니다.
});

export const AuthProvider = ({ children }: { children: React.ReactElement }) => {
  const [isLogin, setIsLogin] = useState(Boolean(UID));
  const value = useMemo(() => ({ isLogin, setIsLogin }), [isLogin, setIsLogin]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
