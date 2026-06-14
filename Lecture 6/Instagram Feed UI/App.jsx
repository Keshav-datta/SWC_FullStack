import PostCard from "./components/PostCard";
import "./styles/App.css";

function App() {
  const posts = [
    {
      id: 1,
      username: "john_doe",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      caption: "Beautiful mountains 🌄",
    },
    {
      id: 2,
      username: "travel_world",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      caption: "Exploring nature 🌿",
    },
    {
      id: 3,
      username: "foodie",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      caption: "Delicious meal 🍕",
    },
  ];

  return (
    <div className="feed">
      <h1>Instagram Feed</h1>

      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
        />
      ))}
    </div>
  );
}

export default App;
