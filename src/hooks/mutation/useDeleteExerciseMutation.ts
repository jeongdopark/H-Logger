import { useMutation, useQueryClient } from "@tanstack/react-query";
import { db } from "../../firebase";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { IExercise } from "../../types/calendar";

interface IArg {
  index: number;
  dateKey: string;
}

export const deleteExercise = async ({ dateKey, index }: IArg) => {
  const uid = localStorage.getItem("uid");
  const docRef = doc(db, "records", uid!);
  const docSnap = await getDoc(docRef);
  const calendarData = docSnap.data()!.calendar;
  const exercise = calendarData[dateKey].exercise;

  const new_exericse = exercise.filter((_: IExercise, idx: number) => {
    return idx !== index;
  });
  const new_calendarData = { ...calendarData[dateKey], exercise: new_exericse };

  await updateDoc(docRef, {
    [`calendar.${dateKey}`]: new_calendarData,
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
    },
  });
};

export default useDeleteExerciseMutation;
