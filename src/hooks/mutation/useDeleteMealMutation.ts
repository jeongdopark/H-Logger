import { useMutation, useQueryClient } from "@tanstack/react-query";
import { db } from "../../firebase";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { IMeal } from "../../types/calendar";

interface IArg {
  index: number;
  dateKey: string;
}

export const deleteMeal = async ({ dateKey, index }: IArg) => {
  const uid = localStorage.getItem("uid");
  const docRef = doc(db, "records", uid!);
  const docSnap = await getDoc(docRef);
  const calendarData = docSnap.data()!.calendar;
  const meal = calendarData[dateKey].meal;

  const new_meal = meal.filter((_: IMeal, idx: number) => {
    return idx !== index;
  });
  const new_calendarData = { ...calendarData[dateKey], meal: new_meal };

  await updateDoc(docRef, {
    [`calendar.${dateKey}`]: new_calendarData,
  });
};

const useDeleteMealMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteMeal,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["calendar"],
      });
    },
  });
};

export default useDeleteMealMutation;
