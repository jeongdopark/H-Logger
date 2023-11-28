import { db } from "../../firebase";
import { useQuery } from "@tanstack/react-query";
import { getDoc, doc } from "firebase/firestore";

const getUserInfo = async () => {
  const uid = localStorage.getItem("uid");
  const docRef = doc(db, "users", uid!);
  const docSnap = await getDoc(docRef);
  return docSnap.data()!;
};

const useGetUserInfoQuery = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => getUserInfo(),
  });
};

export default useGetUserInfoQuery;
