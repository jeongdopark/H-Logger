import { db } from "../firebase";
import { collection, query, getDocs } from "firebase/firestore";

export const checkUserExist = async (uid: string) => {
  const usersQuery = query(collection(db, "users"));
  const usersQuerySnapshot = await getDocs(usersQuery);

  for (const userDoc of usersQuerySnapshot.docs) {
    if (userDoc.id === uid) {
      return true;
    }
  }

  return false;
};
