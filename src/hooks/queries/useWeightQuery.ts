import { db } from "../../firebase";
import { IWeight } from "../../types/weight";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../../const/queryKey";
import { getDoc, doc } from "firebase/firestore";

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
  return useSuspenseQuery({
    queryKey: [QUERY_KEY.WEIGHT],
    queryFn: () => getWeightData(),
  });
};

export default useWeightQuery;
