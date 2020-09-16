import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MusicPlayer from './views/MusicPlayer';
import ListMenu from './views/ListMenu';

const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={ListMenu} />
            <Route exact path='/player' component={MusicPlayer} />
        </Switch>
    );
}

export default Main;