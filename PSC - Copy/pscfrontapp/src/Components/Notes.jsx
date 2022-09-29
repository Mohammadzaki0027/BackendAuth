import React from "react";
import axios from "axios";
const Notes = () => {
  const token = localStorage.getItem("token");
  React.useEffect(() => {
    getdata();
  }, []);
  const getdata = () => {
    axios
      .get("http://localhost:8080/notes", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((r) => {
        console.log(r.data);
      });
  };

  return <div></div>;
};

export default Notes;
