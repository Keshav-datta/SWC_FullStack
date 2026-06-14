function RecentlyPlayed({
  songs,
}) {
  return (
    <div className="recent">
      <h2>
        Recently Played
      </h2>

      {songs.length === 0 ? (
        <p>No songs played.</p>
      ) : (
        songs.map((song) => (
          <p key={song.id}>
            🎵 {song.title}
          </p>
        ))
      )}
    </div>
  );
}

export default RecentlyPlayed;
