import { useState } from "react";

function PostCard({ post }) {
  const [liked, setLiked] =
    useState(false);

  const [saved, setSaved] =
    useState(false);

  const [comment, setComment] =
    useState("");

  const [comments, setComments] =
    useState([]);

  const handleComment = () => {
    if (comment.trim() === "") return;

    setComments([...comments, comment]);
    setComment("");
  };

  return (
    <div className="post-card">
      <div className="post-header">
        <strong>{post.username}</strong>
      </div>

      <img
        src={post.image}
        alt="post"
        className="post-image"
      />

      <div className="post-actions">
        <button
          onClick={() =>
            setLiked(!liked)
          }
        >
          {liked ? "❤️ Liked" : "🤍 Like"}
        </button>

        <button
          onClick={() =>
            setSaved(!saved)
          }
        >
          {saved ? "🔖 Saved" : "📌 Save"}
        </button>
      </div>

      <p className="caption">
        {post.caption}
      </p>

      <div className="comment-section">
        <input
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) =>
            setComment(e.target.value)
          }
        />

        <button
          onClick={handleComment}
        >
          Comment
        </button>
      </div>

      <div className="comments">
        {comments.map((c, index) => (
          <p key={index}>
            💬 {c}
          </p>
        ))}
      </div>
    </div>
  );
}

export default PostCard;
