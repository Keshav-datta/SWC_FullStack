function SongCard({
  song,
  index,
  playSong,
}) {
  return (
    <div
      className="song-card"
      onClick={() =>
        playSong(index)
      }
    >
      <h3>{song.title}</h3>

      <p>{song.artist}</p>
    </div>
  );
}

export default SongCard;
