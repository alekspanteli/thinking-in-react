import pic from "./assets/vite.svg";

export function getImageUrl(person, size) {
  return {pic} + person.imageId + size + ".jpg";
}