import "./App.css";
import { getImageUrl } from "./util.jsx";
// import pic from "./assets/vite.svg";

const Avatar = ({ person, size }) => {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
  s;
};

const Profile = () => {
  return (
    <>
      <Avatar person={{ name: "Lin Lanying", imageId: "1bX5QH6" }} />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Profile />
    </div>
  );
}

export default App;