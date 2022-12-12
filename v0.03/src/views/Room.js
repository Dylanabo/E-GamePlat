import { useState } from "react";
import '../assets/css/listrooms.css';
import Header from './components/hearder';
import { useParams } from "react-router-dom";
import {GameRoom} from "./components/GameRoom";

const Room = () => {
    let { id } = useParams();

    
    return (
        <div id='Bodypage' className='background'>
            <script src="node_modules/store/store.js"></script>
            <script src="node_modules/jquery/dist/jquery.js"></script>
            <script src="js/base.js"></script>
            <Header />
            <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <p className="Title">GAME :{id}</p>
            <div className='content center'>
                <GameRoom id={id}/>
            </div>
        </div>
    )
}

export default Room;
