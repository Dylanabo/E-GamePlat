import { useState } from "react";
import '../assets/css/home.css';
import Header from './components/hearder';


const Room = () => {
    return (
        <div id='Bodypage' className='background'>
            <script src="node_modules/store/store.js"></script>
            <script src="node_modules/jquery/dist/jquery.js"></script>
            <script src="js/base.js"></script>
            <Header />
            <div class="lines">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
            <div className='content center'>

            </div>
        </div>
    )
}

export default Room;
