import React from 'react';
import '../../assets/css/room.css';
import { useParams } from "react-router-dom";

const axios = require('axios');

export class GameRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            room: {},
            idroom: 0,
            nm_game: '',
            nb_player: null,
            player: '',
            nb_player_max: 0,
            id: 0,
            done: false,
        };
    }
    async fetchUsers(id) {
        this.setState({ isFetching: true });
        console.log('http://localhost:8079/room' + id);
        const rps = await axios.get('http://localhost:8079/room' + id)
        if (rps.status == 200 && this.state.done == false) {
            this.setState({
                room: rps.data,
                idroom: rps.data[0].idroom,
                nm_game: rps.data[0].nm_game,
                nb_player: rps.data[0].nb_player,
                player: rps.data[0].player,
                nb_player_max: rps.data[0].nb_player_max,
            })
            this.setState({ done: true })
        }
        console.log('data', rps.data);
        this.setState({ isFetching: false });
    }

    componentDidMount() {
        let id = this.props.id;
        console.log("prop = " + id);

        this.fetchUsers(id);

        //        this.timer = setInterval(() => this.fetchUsers(), 5000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        this.timer = null;
    }

    StartGame() {
        if (this.state.nb_player == this.state.nb_player_max) {
            console.log("StartGame");
        }
    }

    render() {
        return (
            <div className='Title'>
                <p>{this.state.isFetching ? 'Fetching users...' : ''}</p>
                {console.log("rr", this.state.nm_game)}
                {this.state.nm_game &&
                    <div className=''>
                        <div className='GameName'>
                            {this.state.nm_game}
                        </div>
                        <div>
                        <button onClick={this.StartGame()}>Play</button>
                        </div>
                        <div>{this.state.player}</div>
                    </div>
                    }


            </div>
        )
    }
}