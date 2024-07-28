import { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeService"

type Category= Record<string, never>

export type RecipesSliceType = {
    categories: Category[]
    fetchCategories: () => Promise<void>
}

export const createRecipesSlice: StateCreator<RecipesSliceType> = () => ({
    categories: [],
    fetchCategories: async () => {
        getCategories()
    }
})