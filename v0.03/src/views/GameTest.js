import React from 'react';
import Header from './components/hearder';
import { CreateRoomButton } from './components/createRoom';
import { Game2048 } from './components/Games/2048/2048';
import '../assets/css/listrooms.css';

const gametest = () => {

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

                <p className='Title'>2048 TEST</p>
                <Game2048 />
            </div>
        </div>
    );
};

export default gametest;
