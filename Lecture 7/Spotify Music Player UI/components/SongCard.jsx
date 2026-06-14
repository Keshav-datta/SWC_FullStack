function SongCard({
  song,
  setCurrentSong,
}) {
  return (
    <div
      className="song-card"
      onClick={() =>
        setCurrentSong(song)
      }
    >
      <img
        src={song.image}
        alt={song.title}
      />

      <h3>{song.title}</h3>

      <p>{song.artist}</p>
    </div>
  );
}

export default SongCard;
