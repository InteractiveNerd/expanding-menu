import React, { useState, useEffect } from "react";
import axios from "axios";

const Card = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="card">
      {posts.map((post) => (
        <div className="card__container">
          <div className="card__container-hero">{post.body}</div>
          <div className="card__container-caption">{post.title}</div>
          <div className="card__container-btns">
            <button id="left"></button>
            <button id="right"></button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;

// const [data, setData] = useState({ info: [] });

// useEffect(() => {
//   async function fetchData() {
//     const result = await axios(
//       "https://jsonplaceholder.typicode.com/posts/1"
//     );
//   }
//   fetchData();
// }, [setData(result.data)]);
