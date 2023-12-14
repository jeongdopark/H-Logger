import { useMutation, useQueryClient } from "@tanstack/react-query";
import { db } from "../../firebase";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { IMission } from "../../types/mission";

export const deleteMission = async (index: number) => {
  const uid = localStorage.getItem("uid");
  const docRef = doc(db, "records", uid!);
  const docSnap = await getDoc(docRef);
  const missions: IMission[] = docSnap.data()!.missions;

  const new_missions = missions.filter((_: IMission, idx: number) => {
    return idx !== index;
  });

  await updateDoc(docRef, {
    missions: new_missions,
  });
};

const useDeleteMissionMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteMission,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["mission"],
      });
    },
  });
};

export default useDeleteMissionMutation;
