import { db } from "../../firebase";
import { useSuspenseQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../../const/queryKey";
import { getDoc, doc } from "firebase/firestore";

const getCurrentMission = async () => {
  const uid = localStorage.getItem("uid");
  const docRef = doc(db, "records", uid!);
  const docSnap = await getDoc(docRef);
  return docSnap.data()!.currentMission ? docSnap.data()!.currentMission : undefined;
};

const useCurrentMissionQuery = () => {
  return useSuspenseQuery({
    queryKey: [QUERY_KEY.CURRENT_MISSION],
    queryFn: () => getCurrentMission(),
  });
};

export default useCurrentMissionQuery;
