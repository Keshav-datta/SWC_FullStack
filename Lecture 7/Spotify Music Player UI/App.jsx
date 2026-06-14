import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Playlist from "./components/Playlist";
import Player from "./components/Player";
import "./styles/App.css";

function App() {
  const songs = [
    {
      id: 1,
      title: "Blinding Lights",
      artist: "The Weeknd",
      image:
        "https://picsum.photos/300/300?random=1",
    },
    {
      id: 2,
      title: "Shape of You",
      artist: "Ed Sheeran",
      image:
        "https://picsum.photos/300/300?random=2",
    },
    {
      id: 3,
      title: "Believer",
      artist: "Imagine Dragons",
      image:
        "https://picsum.photos/300/300?random=3",
    },
    {
      id: 4,
      title: "Perfect",
      artist: "Ed Sheeran",
      image:
        "https://picsum.photos/300/300?random=4",
    },
  ];

  const [currentSong, setCurrentSong] =
    useState(songs[0]);

  const [isPlaying, setIsPlaying] =
    useState(false);

  return (
    <div className="app">
      <Sidebar />

      <Playlist
        songs={songs}
        setCurrentSong={setCurrentSong}
      />

      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
}

export default App;
