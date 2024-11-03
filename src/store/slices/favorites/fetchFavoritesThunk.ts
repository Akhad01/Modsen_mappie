import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { FavoriteItem } from "../../../types/favorite-item";
import { db } from "../../../firebase";

export const fetchFavorites = createAsyncThunk<FavoriteItem[], undefined, { rejectValue: string }>(
    'favorites/fetchFavorites',
    async (_, { rejectWithValue }) => {
        try {
            const auth = getAuth()
            const user = auth.currentUser
    
            if (!user) {
              throw new Error('Пользователь не авторизован');
            }
    
            const userId = user.uid
    
            const q = query(collection(db, "favorites"), where("userId", "==", userId))
            
            const querySnapshot = await getDocs(q)
    
            const favoritesList: FavoriteItem[] = []
    
            querySnapshot.forEach((doc) => {
              favoritesList.push({
                ...doc.data() as FavoriteItem
              })
            }) 
    
            return favoritesList
          } catch (error) {
            if (error instanceof Error) {
              return rejectWithValue(error.message);
            } else {
              return rejectWithValue('Unknown error');
            }
          }
    }
)