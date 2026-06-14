import SongCard from "./SongCard";

function Playlist({
  songs,
  playSong,
}) {
  return (
    <div className="playlist">
      <h2>Playlist</h2>

      <div className="song-grid">
        {songs.map(
          (song, index) => (
            <SongCard
              key={song.id}
              song={song}
              index={index}
              playSong={
                playSong
              }
            />
          )
        )}
      </div>
    </div>
  );
}

export default Playlist;
