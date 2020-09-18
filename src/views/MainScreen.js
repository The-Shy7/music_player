import React, { useState } from 'react';
import '../App.css';
import BackIcon from '../assets/icons/back.svg';
import { usePalette } from 'react-palette';
import { Link, useHistory } from 'react-router-dom';
import Miniplayer from '../components/Miniplayer';
import useAudio from "../hooks/useAudio";

const MainScreen = () => {
  const {
    changeTrack,
    activeSong,
    playlist,
    playlists,
    tracks,
    index
  } = useAudio();

  const { data } = usePalette(playlist.cover);
  const [mode, setMode] = useState("playlists");

  return (
    <>
      <div className="MainScreenHeader">
        <span className="txt-biglabel">Music</span>
      </div>
      <div className="mainscreen-tabs">
        <span className="txt-label" onClick={() => setMode("playlists")} style={{ color: mode === "playlists" ? 'rgb(80, 80, 80)' : 'rgb(200, 200, 200)' }}>Playlists </span>
        <span className="txt-label" onClick={() => setMode("songs")} style={{ paddingLeft: '8px', color: mode === "songs" ? 'rgb(80, 80, 80)' : 'rgb(200, 200, 200)' }}>Songs </span>
      </div>
      <div className="playlist-search-container" >
        <div className="search-bar">Search</div>
      </div>
      <div className="playlist-list" style={{ display: mode === "playlists" ? 'block' : 'none' }}>
        {Object.keys(playlists).map((pl, i) =>
          <Playlist key={pl} i={i} playlist={playlists[pl].info} curplaylist={playlist} data={data} />
        )}
        <div style={{ marginBottom: index < 0 ? '2rem' : '8rem' }} >
        </div>
      </div>
      <div className="track-list" style={{ display: mode === "songs" ? 'block' : 'none' }}>
      
      </div>
      <Miniplayer />
    </>
  );
}

const Playlist = ({ i, playlist, curplaylist, data }) => {
  let history = useHistory();
  return (
    <div>
      <button
        onClick={() => history.push('/' + playlist.id)}
        className="playlistlist-container"
        style={playlist.name === curplaylist.name ? { color: data.vibrant } : {}}
      >
        <img src={playlist.cover} className="img-playlistlistcover" />
        <div className="playlistlist-textcontainer" >
          <div className="txt-tracktitle">{playlist.name}</div>
          <div className="txt-trackinfo">By {playlist.author}</div>
        </div>
      </button>
    </div>
  );
}

export default MainScreen;