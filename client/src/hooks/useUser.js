import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useUser(username) {
  const [user, setUser] = useState(null);
  function getUser() {
    axios
      .get(`https://torre.bio/api/bios/${username}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((user) => setUser(user))
      .catch((error) => console.log("Hubo un error: " + error));
  }

  useEffect(() => {
    getUser();
  }, []);

  return user;
}
