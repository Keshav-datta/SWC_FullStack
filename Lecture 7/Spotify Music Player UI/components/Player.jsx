function Player({
  currentSong,
  isPlaying,
  setIsPlaying,
}) {
  return (
    <div className="player">
      <div>
        <strong>
          {currentSong.title}
        </strong>

        <p>{currentSong.artist}</p>
      </div>

      <button
        onClick={() =>
          setIsPlaying(!isPlaying)
        }
      >
        {isPlaying
          ? "⏸ Pause"
          : "▶ Play"}
      </button>
    </div>
  );
}

export default Player;
