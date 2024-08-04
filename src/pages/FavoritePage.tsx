import { useMemo } from "react";
import { useAppStore } from "../stores/useAppStore";
import DrinkCard from "../components/DrinkCard";

const FavoritePage = () => {
  const favorites = useAppStore((state) => state.favorites);

  const hasFavorites = useMemo(() => favorites.length, [favorites]);
  return (
    <>
      <h1 className="text-6xl font-extrabold">Favoritos</h1>

      {hasFavorites ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-10">
          {favorites.map((favorite) => (
            <DrinkCard key={favorite.idDrink} drink={favorite} />
          ))}
        </div>
      ) : (
        <p className="my-10 text-center text-2xl">
          Los favoritos se mostrarán aquí
        </p>
      )}
    </>
  );
};

export default FavoritePage;
