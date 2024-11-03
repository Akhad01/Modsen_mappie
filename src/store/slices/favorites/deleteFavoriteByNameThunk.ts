import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase";

export const deleteFavoriteByName = createAsyncThunk(
    "favorites/deleteByName",
    async (id: string, { rejectWithValue }) => {
        try {
            const q = query(collection(db, "favorites"), where("id", "==", id))
            const querySnapshot = await getDocs(q)

            if (!querySnapshot.empty) {
                const idsToDelete: string[] = []
                querySnapshot.forEach(async (docSnapshot) => {
                    idsToDelete.push(docSnapshot.id)
                    console.log(docSnapshot.id);
                    await deleteDoc(doc(db, "favorites", docSnapshot.id));
                });
        
                return idsToDelete
            } else {
                throw new Error(`Документ с ${id} не найден`)
            }
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            } else {
                return rejectWithValue('Unknown error');
            }
        }
    }
)