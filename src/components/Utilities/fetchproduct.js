import fetchShoes from "../../assets/content/ShoeData";
import fetchClothes from "../../assets/content/ClothesData";
import fetchSwimsuits from "../../assets/content/mockData";

export default function fetchProduct(id, category) {
  if (category == "Shoes") return [...fetchShoes()].filter((i) => i.id == id);
  if (category == "Clothes")
    return [...fetchClothes()].filter((i) => i.id == id);
  if (category == "Swimsuits")
    return [...fetchSwimsuits()].filter((i) => i.id == id);
}