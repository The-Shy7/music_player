import { useContext, useEffect, useState } from 'react';
import * as firebase from "firebase/app"
import "firebase/firestore"
import "firebase/storage"

let store

const useCloud = () => {
    const [audioFile, setAudioFile] = useState(null);
    const [artFile, setArtFile] = useState(null);
    const [title, setTitle] = useState("title");
    const [artist, setArtist] = useState("artist");
    const [album, setAlbum] = useState("album");

    function handleUpload(e) {
        const file = e.target.files[0];
        console.log(file);
        const musicRef = firebase.storage().ref('music/' + file.name);

        musicRef.put(file).then(() => {
            const storageRef = firebase.storage().ref('/music');

            storageRef.child(file.name).getMetadata().then(metadata => {
                const url = metadata.downloadURLs[0];
                const messageRef = firebase.database().ref('message');
                messageRef.push({
                    song: url,
                    songName: file.name
                })
            })
        })
    }

    return {
        handleUpload,
        audioFile, setAudioFile,
        artFile, setArtFile,
        title, setTitle,
        artist, setArtist,
        album, setAlbum
    }
}

export { useCloud };

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
store = firebase.firestore()