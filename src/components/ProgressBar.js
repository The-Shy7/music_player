import React from 'react';
import useAudio from "../hooks/useAudio";
import '../styles/App.css';

const ProgressBar = ({ color }) => {
    const { progress } = useAudio();

    return (
        <div className="progressbar-container">
            <div className="progressbar-bar" 
                style={{
                    width: progress + '%',
                    backgroundColor: color }}
            />
        </div>
    );
}

export default ProgressBar;