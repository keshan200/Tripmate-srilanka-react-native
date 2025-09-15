import { db } from "@/firebase";
import { Trip } from "@/types/Trip";
import { addDoc, collection } from "firebase/firestore";

export const tasksRef = collection(db, "trip")


export const createTrip = async (trip: Trip) => {
  const docRef = await addDoc(tasksRef, trip)
  return docRef.id
}