import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const user = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, [page]);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/content/blogs?page=${page}&limit=10`
      );
      setBlogs((prevBlogs) => [...prevBlogs, ...response.data]);
      if (response.data.length < 10) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error.response.data.message);
    }
  };

  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!user) {
        console.error("User not found");
        return;
      }
      const response = await axios.post(
        "http://localhost:5000/api/content/createBlogs",
        { text: text, user_id: user.user._id }
      );
      navigate("/blogs");
      setText("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <InfiniteScroll
        dataLength={blogs.length}
        next={() => setPage(page + 1)}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {blogs.map((blog) => (
          <div key={blog._id}>
            <h1>{blog.author.name}</h1>
            <h2>{blog.text}</h2>
            <p>
              <img src={blog.photo} />
            </p>
            <p>
              <img src={blog.author.photo} />
            </p>
          </div>
        ))}
      </InfiniteScroll>
      {user && user.user && user.user.userType === "brilliant" && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="text">Enter Blog Text:</label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Blogs;
