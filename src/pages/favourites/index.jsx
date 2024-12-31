import RecipeItem from "../../components/recipe-item";
import { GlobalContext } from "../../context";
import { useContext } from "react";

export default function Favourites() {
  const { favouritesList } = useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {" "}
      {/* Fixed typo here */}
      {favouritesList && favouritesList.length > 0 ? (
        favouritesList.map((item) => <RecipeItem key={item.id} item={item} />) // Added key prop
      ) : (
        <div className="lg:text-4xl text-xl text-center text-black font-extrabold">
          Nothing is added to favourites
        </div>
      )}
    </div>
  );
}
