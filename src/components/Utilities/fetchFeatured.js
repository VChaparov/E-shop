import fetchShoes from "../../assets/content/ShoeData";
import fetchClothes from "../../assets/content/ClothesData";
import fetchSwimsuits from "../../assets/content/SwimsuitData";

export default function fetchFeatured() {
  var items = [
    [...fetchShoes()].find((i) => i.featured == 1),
    [...fetchClothes()].find((i) => i.featured == 1),
    [...fetchSwimsuits()].find((i) => i.featured == 1),
  ];

  return  items ;
}
