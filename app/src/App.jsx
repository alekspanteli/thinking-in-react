import "./App.css";

const Avatar = () => {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="Lin Lanying"
      width={100}
      height={100}
    />
  );
};

const App = () => {
  return <Avatar />;
};

export default App;