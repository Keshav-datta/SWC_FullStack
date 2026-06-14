function PostCard({ post }) {
  return (
    <div className="post-card">
      <h3>{post.username}</h3>

      <img
        src={post.image}
        alt="post"
      />

      <p>{post.caption}</p>
    </div>
  );
}

export default PostCard;
