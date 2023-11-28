import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { IUser } from "../types/user";

interface IArg {
  uid: string;
  userData: IUser;
}

export const createUserDoc = async ({ uid, userData }: IArg) => {
  await setDoc(doc(db, "users", uid), userData);
  await setDoc(doc(db, "records", uid), {
    calendar: {},
    mission: {},
    weight: [],
  });
};
