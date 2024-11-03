import { createAsyncThunk } from "@reduxjs/toolkit";
import { PlaceItem } from "../../../types/place-item";
import { getAuth } from "firebase/auth";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase";

export const addToFavorites = createAsyncThunk(
    'favorites/addToFavorites',
    async (place: PlaceItem, { rejectWithValue }) => {
        try {
            const auth = getAuth()
            const user = auth.currentUser

            if (!user) {
                throw new Error('Пользователь не авторизован')
            }

            const userId = user.uid

            const q = query(
                collection(db, "favorites"),
                where("userId", "==", userId),
                where("id", "==", place.id)
            )

            const querySnapshot = await getDocs(q)

            if (!querySnapshot.empty) {
                console.log("Место уже избранном")
                return
            }

            const docRef = await addDoc(collection(db, "favorites"), {
                ...place,
                addedAt: new Date(),
                userId: userId
            })
            return { ...place, id: docRef.id }
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            } else {
                return rejectWithValue('Unknown error');
            }
        }
    }
)