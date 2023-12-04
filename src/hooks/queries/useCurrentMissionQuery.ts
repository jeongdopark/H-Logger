import { db } from "../../firebase";
import { useQuery } from "@tanstack/react-query";
import { getDoc, doc } from "firebase/firestore";

const getCurrentMission = async () => {
  const uid = localStorage.getItem("uid");
  const docRef = doc(db, "records", uid!);
  const docSnap = await getDoc(docRef);

  return docSnap.data()!.current_mission;
};

const useCurrentMissionQuery = () => {
  return useQuery({
    queryKey: ["mission"],
    queryFn: () => getCurrentMission(),
  });
};

export default useCurrentMissionQuery;