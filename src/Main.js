import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MusicPlayer from './views/MusicPlayer';
import ListMenu from './views/ListMenu';
import MainScreen from './views/MainScreen';

const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={MainScreen} />
            <Route exact path='/player' component={MusicPlayer} />
            <Route path='/:playlist' component={ListMenu} />
        </Switch>
    );
}

export default Main;