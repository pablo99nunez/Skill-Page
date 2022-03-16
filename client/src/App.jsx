import { useEffect, useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import SkillPage from "./components/SkillPage/SkillPage";
import down from "./assets/icons/chevron-down.svg";
import useUser from "./hooks/useUser";

function App() {
  const user = useUser("pablo99nunez");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user]);

  return (
    <div className="App">
      <Navbar></Navbar>
      {loading ? <h1>Loading</h1> : <SkillPage user={user}></SkillPage>}
      <div className="scrollDown">
        <img src={down} alt="" />
      </div>
    </div>
  );
}

export default App;
