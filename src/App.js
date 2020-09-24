import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MusicProvider } from "./contexts/MusicContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { DisplayProvider } from "./contexts/DisplayContext";
import Main from "./Main";
import './styles/App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

function App() {
    return (
        <div className="App">
            <MusicProvider>
                <ThemeProvider>
                    <DisplayProvider>
                        <BrowserRouter>
                            <Main />
                        </BrowserRouter>
                    </DisplayProvider>
                </ThemeProvider>
            </MusicProvider>
        </div>
    );
}

export default App;