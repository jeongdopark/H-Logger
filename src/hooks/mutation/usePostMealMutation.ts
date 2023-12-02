import { db } from "../../firebase";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface IMeal {
  menus: string[];
  time: string;
  dateKey: string;
}

const postMeal = async ({ menus, time, dateKey }: IMeal) => {
  const uid = localStorage.getItem("uid");
  const docRef = doc(db, "records", uid!);
  const docSnap = await getDoc(docRef);
  const calendarData = docSnap.data()!.calendar;

  if (calendarData[dateKey]) {
    if (calendarData[dateKey].meal) {
      const mealArray = calendarData[dateKey].meal;
      mealArray.push({ menus, time });
    } else {
      calendarData[dateKey] = { ...calendarData[dateKey], meal: [{ menus, time }] };
    }
  } else {
    // 해당 날짜에 meal 배열이 없으면, 새 배열 생성
    calendarData[dateKey] = { meal: [{ menus, time }] };
  }

  await updateDoc(docRef, {
    [`calendar.${dateKey}`]: calendarData[dateKey],
  });
};

const useCreateMealMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postMeal,
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["calendar"],
      });
    },
  });
};

export default useCreateMealMutation;
