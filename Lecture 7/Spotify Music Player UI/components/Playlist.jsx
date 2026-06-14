import SongCard from "./SongCard";

function Playlist({
  songs,
  setCurrentSong,
}) {
  return (
    <div className="playlist">
      <h2>My Playlist</h2>

      <div className="songs-grid">
        {songs.map((song) => (
          <SongCard
            key={song.id}
            song={song}
            setCurrentSong={
              setCurrentSong
            }
          />
        ))}
      </div>
    </div>
  );
}

export default Playlist;
