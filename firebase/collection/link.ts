import { firestore } from "../my-base";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
  addDoc,
} from "firebase/firestore";
import { LinkType } from "../type/link";

export class LinkCollection {
  static addLink = async (userId: string, linkData: LinkType) => {
    try {
      const linkCollectionRef = collection(firestore, "user", userId, "link");
      await addDoc(linkCollectionRef, linkData);
    } catch (error: any) {
      throw new Error(`Failed to add link document: ${error.message}`);
    }
  };

  static readLinkList = async (userId: string) => {
    console.debug("testㅅㄷㄴㅅ");
    try {
      console.debug("testㅅㄷㄴㅅ");
      const linkCollectionRef = collection(firestore, "user", userId, "link");
      const querySnapshot = await getDocs(linkCollectionRef);

      const linkList = querySnapshot.docs.map((doc) => {
        const linkData = doc.data();
        const linkId = doc.id;
        return { id: linkId, ...linkData };
      });

      return linkList;
    } catch (error: any) {
      throw new Error(`Failed to fetch user links: ${error.message}`);
    }
  };

  static updateUserLinkTag = async (
    userId: string,
    linkId: string,
    newTag: string[]
  ) => {
    try {
      const linkDocRef = doc(firestore, "user", userId, "link", linkId);
      await updateDoc(linkDocRef, { tag: newTag });
    } catch (error: any) {
      throw new Error(`Failed to update link tags: ${error.message}`);
    }
  };

  static deleteLink = async (userId: string, linkId: string) => {
    try {
      const linkDocRef = doc(firestore, "user", userId, "link", linkId);
      await deleteDoc(linkDocRef);
    } catch (error: any) {
      throw new Error(`Failed to delete link document: ${error.message}`);
    }
  };
}
