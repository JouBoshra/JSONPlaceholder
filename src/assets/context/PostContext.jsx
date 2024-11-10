import { createContext, useState, useContext } from "react";

const PostContext = createContext();

export function PostProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <PostContext.Provider
      value={{ posts, setPosts, selectedPost, setSelectedPost }}
    >
      {children}
    </PostContext.Provider>
  );
}

export function usePostContext() {
  return useContext(PostContext);
}
