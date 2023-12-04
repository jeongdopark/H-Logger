import { db } from "../../firebase";
import { useQuery } from "@tanstack/react-query";
import { getDoc, doc } from "firebase/firestore";
import { IWeight } from "../../types/weight";

const getWeightData = async () => {
  const uid = localStorage.getItem("uid");
  const docRef = doc(db, "records", uid!);
  const docSnap = await getDoc(docRef);
  const arr: IWeight[] = [];
  for (const [key, value] of Object.entries(docSnap.data()!.weights)) {
    arr.push({ date: Number(key), weight: Number(value) });
  }

  return arr;
};

const useWeightQuery = () => {
  return useQuery({
    queryKey: [QUERY_KEY.WEIGHT],
    queryFn: () => getWeightData(),
  });
};

export default useWeightQuery;
