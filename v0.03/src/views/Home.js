import React from 'react';
import Header from './components/hearder';
import { CreateRoomButton } from './components/createRoom';
import { ListRoom } from './components/listRoom';
import '../assets/css/home.css';

const home = () => {

    return (
        <div id='Bodypage'>
            <Header />
            <div className='content center'>
                <p className='Title'>Room available</p>
                <ListRoom />
                <CreateRoomButton />
            </div>
        </div>
    );
};

export default home;
