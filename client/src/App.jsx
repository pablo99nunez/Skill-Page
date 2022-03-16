import "./App.scss";
import Avatar from "./components/Avatar/Avatar";
import Hexagon from "./components/Hexagon/Hexagon";
import Navbar from "./components/Navbar/Navbar";
import useUser from "./hooks/useUser";

function App() {
  // const user = useUser("pablo99nunez");
  return (
    <div className="App">
      <Navbar></Navbar>
      <Avatar size="10rem"></Avatar>
    </div>
  );
}

export default App;
