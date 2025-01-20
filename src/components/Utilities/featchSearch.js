import fetchShoes from "../../assets/content/ShoeData";
import fetchClothes from "../../assets/content/ClothesData";
import fetchSwimsuits from "../../assets/content/SwimsuitData";

export default function featchSearch(word) {
  if(word === undefined)
    return [...{}];
  var items = [
    ...[...fetchShoes()].filter((i) => i.name.toLowerCase().includes(word.toLowerCase())),
    ...[...fetchClothes()].filter((i) => i.name.toLowerCase().includes(word.toLowerCase())),
    ...[...fetchSwimsuits()].filter((i) => i.name.toLowerCase().includes(word.toLowerCase())),
  ];
  return items;
}
