import { useMutation, useQueryClient } from "@tanstack/react-query";
import { db } from "../../firebase";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { IMission } from "../../types/mission";

export const finishMission = async ({}) => {
  const uid = localStorage.getItem("uid");
  const docRef = doc(db, "records", uid!);
  const docSnap = await getDoc(docRef);
  const missions: IMission[] = docSnap.data()!.missions;
  missions[missions.length - 1].isActive = false;
  await updateDoc(docRef, {
    missions,
  });
};

const useFinishMissionMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: finishMission,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["mission"],
      });
    },
  });
};

export default useFinishMissionMutation;
