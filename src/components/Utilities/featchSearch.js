import fetchShoes from "../../assets/content/ShoeData";
import fetchClothes from "../../assets/content/ClothesData";
import fetchSwimsuits from "../../assets/content/SwimsuitData";

export default function featchSearch(word) {
  if(word === undefined)
    return [...{}];
  var items = [
    ...[...fetchShoes()].filter((i) => i.name.toLowerCase().includes(word)),
    ...[...fetchClothes()].filter((i) => i.name.toLowerCase().includes(word)),
    ...[...fetchSwimsuits()].filter((i) => i.name.toLowerCase().includes(word)),
  ];
  return items;
}
