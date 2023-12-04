import { db } from "../../firebase";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../../const/queryKey";
import { getDoc, doc } from "firebase/firestore";

const getUserInfo = async () => {
  const uid = localStorage.getItem("uid");
  const docRef = doc(db, "users", uid!);
  const docSnap = await getDoc(docRef);
  return docSnap.data()!;
};

const useUserInfoQuery = () => {
  return useQuery({
    queryKey: [QUERY_KEY.USER],
    queryFn: () => getUserInfo(),
  });
};

export default useUserInfoQuery;
