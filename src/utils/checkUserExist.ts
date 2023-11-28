import { db } from "../firebase";
import { collection, query, getDocs } from "firebase/firestore";

export const checkUserExist = async (uid: string) => {
  const usersQuery = query(collection(db, "users"));
  const usersQuerySnapshot = await getDocs(usersQuery);

  usersQuerySnapshot.forEach((userDoc) => {
    if (userDoc.id === uid) return true;
  });

  return false;
};
