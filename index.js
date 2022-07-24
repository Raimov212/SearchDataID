import React, { useState, useEffect } from "react";
import axios from "axios";

const Index = () => {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);
  const [error, setEror] = useState("");

  const changeHandler = () => {
    setIdFromButtonClick(id);
  };

  useEffect(() => {
    axios
      .get(`http://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((error) => {
        console.log(error);
        setEror({ error: "Eror 101" });
      });
  }, [idFromButtonClick]);

  return (
    <div>
      {error ? (
        <div>Error 101</div>
      ) : (
        <ul>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button type="submit" onClick={changeHandler}>
            changeButton
          </button>
          <div>{posts.title}</div>
        </ul>
      )}
    </div>
  );
};

export default Index;
