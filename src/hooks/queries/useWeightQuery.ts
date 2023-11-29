import { db } from "../../firebase";
import { useQuery } from "@tanstack/react-query";
import { getDoc, doc } from "firebase/firestore";

const getWeightData = async () => {
  const uid = localStorage.getItem("uid");
  const docRef = doc(db, "records", uid!);
  const docSnap = await getDoc(docRef);

  return docSnap.data()!.weight;
};

const useWeightQuery = () => {
  return useQuery({
    queryKey: ["weight"],
    queryFn: () => getWeightData(),
  });
};

export default useWeightQuery;
