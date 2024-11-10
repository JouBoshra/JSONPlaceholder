import React, { useEffect, useState } from "react";

function PostDetails({ postId }) {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (!postId) return;

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => setPost(data));

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, [postId]);

  if (!post) return null;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <h3>Comments</h3>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>
            <strong>{comment.name}</strong>: {comment.body}
          </p>
        </div>
      ))}
    </div>
  );
}

export default PostDetails;
