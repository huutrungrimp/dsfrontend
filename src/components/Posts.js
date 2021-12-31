import { useState, useEffect } from "react";
import axios from "axios";

function Posts(props) {
  console.log(props);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://backend4ds.herokuapp.com/api/todos/").then((res) => {
      console.log(res);
      setPosts(res.data);
    });
  }, []);

  console.log(posts);

  return (
    <div className="container">
      <h3>List of posts</h3>
      {posts === undefined
        ? ""
        : posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
    </div>
  );
}

export default Posts;
