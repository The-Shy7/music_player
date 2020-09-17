import { songs } from './Songs';
const imagedir = '../assets/images/';

export const info = {
    name: 'Liked Songs',
    cover: imagedir + 'Flow.jpg',
    author: 'Raj'
};

export const tracks = [
    songs["after-dark"],
    songs["instant-crush"],
    songs["alones"],
    songs["luv-sic"],
    songs["shunkan-sent"],
    songs["mikazuki"],
    songs["kids"]
];

export const playlists = {
    'liked-songs': {
        info: {
            name: 'Liked Songs',
            cover: imagedir + 'Flow.jpg',
            author: 'Raj'
        },
        tracks: [
            songs["after-dark"],
            songs["instant-crush"],
            songs["alones"],
            songs["luv-sic"],
            songs["shunkan-sent"],
            songs["mikazuki"],
            songs["kids"]
        ]
    },
    'anime':{
        info: {
            name: 'Anime',
            cover: imagedir + 'House.jpg',
            author: 'Raj'
        },
        tracks: [
            songs["after-dark"],
            songs["alones"],
            songs["shunkan-sent"],
            songs["mikazuki"]
        ]
    }
};