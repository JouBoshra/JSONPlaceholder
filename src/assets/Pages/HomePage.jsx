import React, { useEffect, useState } from "react";
import PostList from "../Components/PostList";
import PostDetails from "../Components/PostDetails";
import SearchBar from "../Components/SearchBar";
import { usePostContext } from "../context/PostContext";

function HomePage() {
  const { posts, setPosts, selectedPost, setSelectedPost } = usePostContext();
  const [filteredPosts, setFilteredPosts] = useState(posts);

  useEffect(() => {
    if (posts.length === 0) {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
          setPosts(data);
          setFilteredPosts(data);
        });
    }
  }, [posts, setPosts]);

  const handleSearch = (query) => {
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <PostList posts={filteredPosts} onPostSelect={setSelectedPost} />
      {selectedPost && <PostDetails postId={selectedPost.id} />}
    </div>
  );
}

export default HomePage;
