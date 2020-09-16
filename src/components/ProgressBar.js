import React from 'react';
import '../App.css';
import useAudio from "../hooks/useAudio";

const ProgressBar = ({value, color}) => {
    const {
        activeSong,
        progress
    } = useAudio();
    return (
        <div className="progressbar-container">
            <div className="progressbar-bar" style={{width: progress + '%', backgroundColor: color}}>
            </div>
        </div>
    );
}

export default ProgressBar;