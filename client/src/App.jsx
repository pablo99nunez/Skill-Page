import { useEffect, useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import SkillPage from "./components/SkillPage/SkillPage";
import down from "./assets/icons/chevron-down.svg";
import useUser from "./hooks/useUser";
import { Routes, useParams } from "react-router";
import Loading from "./components/Loading/Loading";

function App() {
  const { username } = useParams();
  const user = useUser(username);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (user) {
      setLoading(false);
    } else setLoading(true);
  }, [user]);

  return (
    <div className="App">
      <Navbar></Navbar>

      {loading ? (
        <Loading></Loading>
      ) : (
        <>
          <SkillPage user={user}></SkillPage>
          <div className="scrollDown">
            <img src={down} alt="" />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
