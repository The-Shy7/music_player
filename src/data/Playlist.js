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
    songs["kids"],
    songs["about-us"],
    songs["dance"],
    songs["feather"],
    songs["hill"],
    songs["say-hello"],
    songs["trampoline"]
];

export const playlists = {
    'raj-liked-songs': {
        info: {
            id: 'raj-liked-songs',
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
            songs["kids"],
            songs["about-us"],
            songs["dance"],
            songs["feather"],
            songs["hill"],
            songs["say-hello"],
            songs["trampoline"]
        ]
    },
    'raj-anime':{
        info: {
            id: 'raj-anime',
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