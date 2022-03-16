import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useUser(username) {
  const [user, setUser] = useState(null);
  function getUser() {
    setUser(null);
    axios
      .get(`http://localhost:3001/user/${username}`)
      .then((user) => setUser(user.data))
      .catch((error) => console.log("Hubo un error: " + error));
  }

  useEffect(() => {
    getUser();
  }, [username]);

  return user;
}
