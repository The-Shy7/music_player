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
    'default': {
        id: 'default',
        name: 'default',
        cover: imagedir + 'Placeholder.jpg',
        thumbs: [imagedir + 'Placeholder.jpg', imagedir + 'Placeholder.jpg', imagedir + 'Placeholder.jpg'],
        author: 'default',
        tracks: [
            // songs["after-dark"],
            // songs["instant-crush"],
            // songs["alones"],
            // songs["luv-sic"],
            // songs["shunkan-sent"],
            // songs["mikazuki"],
            // songs["kids"],
            // songs["about-us"],
            // songs["dance"],
            // songs["feather"],
            // songs["hill"],
            // songs["say-hello"],
            // songs["trampoline"]
            songs["default"]
        ]
    }
};