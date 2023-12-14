import { useMutation, useQueryClient } from "@tanstack/react-query";
import { db } from "../../firebase";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { IExercise } from "../../types/calendar";
import { IMission } from "../../types/mission";

interface IArg {
  index: number;
  dateKey: string;
}

export const deleteExercise = async ({ dateKey, index }: IArg) => {
  const uid = localStorage.getItem("uid");
  const docRef = doc(db, "records", uid!);
  const docSnap = await getDoc(docRef);
  const calendarData = docSnap.data()!.calendar;
  const exercise: IExercise[] = calendarData[dateKey].exercise;
  const missions: IMission[] = docSnap.data()!.missions;

  const new_exericse = exercise.filter((_: IExercise, idx: number) => {
    return idx !== index;
  });
  if (missions[missions.length - 1] && missions[missions.length - 1].exercise[dateKey]) {
    if (new_exericse.length === 0) {
      delete missions[missions.length - 1].exercise[dateKey];
    }
    missions[missions.length - 1].exercise[dateKey] = new_exericse;
    missions[missions.length - 1].exercise_count -= 1;
  }

  const new_calendarData = { ...calendarData[dateKey], exercise: new_exericse };

  await updateDoc(docRef, {
    [`calendar.${dateKey}`]: new_calendarData,

    missions,
  });
};

const useDeleteExerciseMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteExercise,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["calendar"],
      });
      queryClient.invalidateQueries({
        queryKey: ["mission"],
      });
    },
  });
};

export default useDeleteExerciseMutation;
