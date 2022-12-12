import React from 'react';
import Header from './components/hearder';
import { CreateRoomButton } from './components/createRoom';
import { ListRoom } from './components/listRoom';
import '../assets/css/home.css';

const home = () => {

    return (
        <div id='Bodypage' className='background'>
            <script src="node_modules/store/store.js"></script>
            <script src="node_modules/jquery/dist/jquery.js"></script>
            <script src="js/base.js"></script>
            <Header />
            <div className="lines">
                <div className="line"></div>
                <div className="line display-none"></div>
                <div className="line"></div>
            </div>
            <div className='content center'>

                <p className='Title'>Room available</p>
                <ListRoom />
                <CreateRoomButton />
            </div>
        </div>
    );
};

export default home;
