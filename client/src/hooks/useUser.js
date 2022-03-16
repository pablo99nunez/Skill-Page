import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useUser(username) {
  const [user, setUser] = useState(null);
  function getUser() {
    axios
      .get(`/api/api/bios/${username}`, {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((user) => setUser(user.data))
      .catch((error) => console.log("Hubo un error: " + error));
  }

  useEffect(() => {
    getUser();
  }, []);

  return user;
}
