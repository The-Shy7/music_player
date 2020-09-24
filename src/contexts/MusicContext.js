import React, { useState } from 'react';
import { playlists as plist } from "../data/Playlist";
import * as firebase from "firebase/app"
import "firebase/firestore"
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyC37p4smmnda3KwUPQrqahGE6lTjtnusaw",
  authDomain: "rajmusicplayerlol.firebaseapp.com",
  databaseURL: "https://rajmusicplayerlol.firebaseio.com",
  projectId: "rajmusicplayerlol",
  storageBucket: "rajmusicplayerlol.appspot.com",
  messagingSenderId: "1042740678906",
  appId: "1:1042740678906:web:cd36122a266be65ea03943",
  measurementId: "G-7CV4VFXNCP"
};

firebase.initializeApp(firebaseConfig)

const MusicContext = React.createContext([{}, () => { }]);

const MusicProvider = (props) => {
    const [state, setState] = useState({
        playlistplaceholder: plist["default"],
        playlists: plist,
        tracks: plist["default"].tracks,
        index: -1,
        audioSrc: plist["default"].tracks[0].src,
        audio: new Audio(plist["default"].tracks[0]),
        play: false,
        progress: 0.0,
        activeSong: {
            id: 'placeholder',
            src: '',
            cover: '',
            thumbs: [],
            title: 'Title',
            artist: ['Artist'],
            album: 'Album'
        },
        starttime: '0:00',
        color: "#ffffff",
        playlist: plist["default"],
        displayinfo: plist["default"],
        displaylist: plist["default"].tracks,
        shuffle: false,
        repeat: 'none'
    });

    return (
        <MusicContext.Provider value={[state, setState]}>
            {props.children}
        </MusicContext.Provider>
    );
}

export { MusicContext, MusicProvider };