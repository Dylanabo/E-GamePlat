import React from 'react';
const axios = require('axios');

export class ListRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            room: [],
        };
    }

    async fetchUsers() {
        this.setState({ isFetching: true });
        const rps = await axios.get('http://localhost:8079/room')
        if (rps.status == 200) {
            this.setState({ room: rps.data })
        }
        this.setState({ isFetching: false });
    }

    componentDidMount() {
        this.fetchUsers();
        //        this.timer = setInterval(() => this.fetchUsers(), 5000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        this.timer = null;
    }

    render() {
        return (
            <div className='Iscenter'>
                <p>{this.state.isFetching ? 'Fetching users...' : ''}</p>
                <ul>
                    {this.state.room.map(room => {
                        console.log(room)
                        return (
                            <li key={`room-${room.idroom}`}>
                                <div className='roomVue'>
                                    <div className='roomVueNmGame left'>
                                        {room.nm_game}
                                    </div>
                                    <div className='roomVueNbPlayer right'>
                                        {room.nb_player}/{room.nb_player_max}
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}