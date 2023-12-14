import { db } from "../../firebase";
import { IMission } from "../../types/mission";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const postMission = async ({ ...props }: IMission) => {
  const uid = localStorage.getItem("uid");
  const docRef = doc(db, "records", uid!);
  const docSnap = await getDoc(docRef);
  const missions_array = docSnap.data()!.missions;
  await updateDoc(docRef, {
    missions: [...missions_array, props],
  });
};

const useCreateMissionMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postMission,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["calendar"],
      });
    },
  });
};

export default useCreateMissionMutation;
