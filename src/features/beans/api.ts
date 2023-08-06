import { db } from "src/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { BeansResponse } from "./types";

export const fetchBeans = async (docId: string): Promise<BeansResponse> => {
  const docRef = doc(db, "beans", docId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data() as BeansResponse;
  } else {
    // docSnap.data() will be undefined in this case
    throw new Error(`Doc ID: ${docId} - no such document!`);
  }
};
