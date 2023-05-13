import { firestore } from "../my-base";
import { UserType } from "../type/user";
import {
  collection,
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";

export class UserCollection {
  static readUser = async (userId: string) => {
    const userDocRef = doc(firestore, "user", userId);
    const userDocSnap = await getDoc(userDocRef);
    if (userDocSnap.exists()) {
      return userDocSnap.data();
    }
    return null;
  };

  static updateUserTagList = async (userId: string, tagList: string[]) => {
    const userDocRef = doc(firestore, "user", userId);
    await updateDoc(userDocRef, { tagList: arrayUnion(...tagList) });
  };
}
