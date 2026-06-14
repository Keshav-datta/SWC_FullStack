import {
  useEffect,
  useState,
} from "react";

import PostCard from "./PostCard";

function Feed() {
  const [posts, setPosts] =
    useState([]);

  const [page, setPage] =
    useState(1);

  useEffect(() => {
    loadPosts();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight +
          window.scrollY >=
        document.body.offsetHeight - 100
      ) {
        loadPosts();
      }
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  });

  function loadPosts() {
    const newPosts = Array.from(
      { length: 5 },
      (_, i) => ({
        id:
          page * 10 + i,
        username:
          "user_" +
          (page * 10 + i),
        image: `https://picsum.photos/500/400?random=${
          page * 10 + i
        }`,
        caption:
          "Sample Instagram Post",
      })
    );

    setPosts((prev) => [
      ...prev,
      ...newPosts,
    ]);

    setPage((prev) => prev + 1);
  }

  return (
    <div className="feed">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
        />
      ))}
    </div>
  );
}

export default Feed;
