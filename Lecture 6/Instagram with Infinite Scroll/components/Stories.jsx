function Stories() {
  const stories = [
    "John",
    "Emma",
    "Alex",
    "Sophia",
    "Mike",
    "David",
    "Sara",
  ];

  return (
    <div className="stories">
      {stories.map((story, index) => (
        <div
          key={index}
          className="story"
        >
          <div className="story-circle">
            {story[0]}
          </div>

          <p>{story}</p>
        </div>
      ))}
    </div>
  );
}

export default Stories;
