import { create } from "zustand";
import { createRecipesSlice, RecipesSliceType } from "./recipeSlice";
import { CreateFavoritesSlice, FavoritesSliceType } from './favoritesSlice'
import { CreateNotificationSlice, NotificationSliceType } from "./notificationsSlice";
import { devtools } from "zustand/middleware";

export const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificationSliceType>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...CreateFavoritesSlice(...a),
    ...CreateNotificationSlice(...a)
})))