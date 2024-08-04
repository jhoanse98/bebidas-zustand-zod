import { create } from "zustand";
import { createRecipesSlice, RecipesSliceType } from "./recipeSlice";
import { CreateFavoritesSlice, FavoritesSliceType} from './favoritesSlice'
import { devtools } from "zustand/middleware";

export const useAppStore = create<RecipesSliceType & FavoritesSliceType>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...CreateFavoritesSlice(...a)
})))