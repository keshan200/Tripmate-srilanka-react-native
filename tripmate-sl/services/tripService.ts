import { auth, db } from "@/firebase";
import { Trip } from "@/types/Trip";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

export const tripRef = collection(db, "trips")


export const createTrip = async (tripData: any) => {
  if (!auth.currentUser) return;

  await addDoc(collection(db, "trips"), {
    ...tripData,
    status: "planned", 
    uid: auth.currentUser.uid,

  });
};


export const getAllTrip = async (): Promise<Trip[]> => {
  if (!auth.currentUser) return [];
  
  const q = query(tripRef, where("uid", "==", auth.currentUser.uid));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as Trip[];
};
