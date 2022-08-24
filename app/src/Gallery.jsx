import pic from "./assets/vite.svg";

const Profile = () => {
  return (
    <img
      src={pic}
      alt="Alan L. Hart"
    />
  );
}

const Gallery = () => {
  return (
      <>
      <Profile />
      <Profile />
      <Profile />
      </>
  )
};

export default Gallery;