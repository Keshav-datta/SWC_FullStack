import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Playlist from "./components/Playlist";
import Player from "./components/Player";
import RecentlyPlayed from "./components/RecentlyPlayed";

import "./styles/App.css";

function App() {
  const songs = [
    {
      id: 1,
      title: "Song One",
      artist: "Artist A",
      src: "/songs/song1.mp3",
    },
    {
      id: 2,
      title: "Song Two",
      artist: "Artist B",
      src: "/songs/song2.mp3",
    },
    {
      id: 3,
      title: "Song Three",
      artist: "Artist C",
      src: "/songs/song3.mp3",
    },
  ];

  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [recentlyPlayed,
    setRecentlyPlayed] =
    useState([]);

  const currentSong =
    songs[currentIndex];

  const playSong = (index) => {
    setCurrentIndex(index);

    const song = songs[index];

    setRecentlyPlayed((prev) => {
      const filtered =
        prev.filter(
          (s) => s.id !== song.id
        );

      return [
        song,
        ...filtered,
      ].slice(0, 5);
    });
  };

  return (
    <div className="app">
      <Sidebar />

      <div className="main-content">
        <Playlist
          songs={songs}
          playSong={playSong}
        />

        <RecentlyPlayed
          songs={recentlyPlayed}
        />
      </div>

      <Player
        songs={songs}
        currentIndex={
          currentIndex
        }
        setCurrentIndex={
          setCurrentIndex
        }
        currentSong={
          currentSong
        }
        playSong={playSong}
      />
    </div>
  );
}

export default App;
