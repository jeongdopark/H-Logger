import { db } from "../../firebase";
import { useQuery } from "@tanstack/react-query";
import { getDoc, doc } from "firebase/firestore";

const getMissionsData = async () => {
  const uid = localStorage.getItem("uid");
  const docRef = doc(db, "records", uid!);
  const docSnap = await getDoc(docRef);
  return docSnap.data()!.missions;
};

const useMissionsQuery = () => {
  return useQuery({
    queryKey: [QUERY_KEY.MISSIONS],
    queryFn: () => getMissionsData(),
  });
};

export default useMissionsQuery;
