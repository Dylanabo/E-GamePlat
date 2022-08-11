import React from 'react';
import Select from 'react-select'
import { Slider, InputNumber, Row, Col } from 'antd';
import socket from './socket'
import { Navigate } from 'react-router-dom';
const axios = require('axios');

export class CreateRoomButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    buttonClick() {
        this.setState({ open: !this.state.open });
    };

    render() {
        const buttonName = "Create Room";

        return (
            <div className='ButtonCreate'>
                <Button
                    buttonClick={() => this.buttonClick()}
                    open={this.state.open}
                    buttonName={buttonName}
                />
            </div>
        );
    }
};

export class Modal extends React.Component {
    render() {
        return (
            <div
                className={this.props.open
                    ? "inner-modal inner-modal-open"
                    : "inner-modal"}
            >
                <Content
                    open={this.props.open}
                    bodyText={this.props.bodyText}
                    buttonClick={this.props.buttonClick}
                />
            </div>
        );
    }
};


export class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            game: [{ value: "yannouf", label: "Yannouf" }, { value: "2048", label: "2048" }, { value: "epiquizz", label: "EpiQuizz" }],
            chosedGame: "",
            nb_player: 0
        };
    }

    handleChange = e => {
        this.setState({ chosedGame: e.value });
        if (e.value == "yannouf") {
            this.setState({nb_player: 3})
        } else if (e.value == "2048") {
            this.setState({nb_player: 1})
        }
        console.log("e)", this.state.chosedGame)
    }

    onChange = value => {
        this.setState({
            inputValue: value,
        });
    };
    
    onValidate = async (e) => {
        console.log("Héééé");
        if (this.state.nb_player != 0) {
            // socket.auth = {'chosedGame': this.state.chosedGame, 'nb_player': this.state.nb_player };
            // socket.connect();
            let json_data = {player: localStorage.getItem('user'), nm_game: this.state.chosedGame, nb_max: this.state.nb_player };
            console.log("Héééé + 0  => "+ this.state.chosedGame);

            if (this.state.chosedGame == "2048") {
                let res = await axios.post('http://localhost:8079/create_room', json_data);

                let data = res.data;
                console.log("validate" + data);
                if (data) {
                  Navigate("/room" + data);
                }
            }
            this.props.buttonClick();
        }
    }

    render() {
        const { inputValue } = this.state.nb_player;
        return (
            <div
                className={this.props.open
                    ? "content-wrapper content-open"
                    : "content-wrapper"}
            >
                <i className="fa fa-times-circle"
                    onClick={this.props.buttonClick}
                ></i>
                <p>
                    CREATE A ROOM
                </p>
                <div className="modal-content">
                    <div className='SelectGame'>
                        <Select options={this.state.game} onChange={this.handleChange} />
                    </div>
                    {this.state.chosedGame == "yannouf"
                        && <div><p>3 Player Required </p></div>
                    }
                    {this.state.chosedGame == "epiquizz" && <Row>
                        <Col span={12}>
                            <Slider
                                min={3}
                                max={8}
                                onChange={this.onChange}
                                value={typeof inputValue === 'number' ? inputValue : 3}
                            />
                        </Col>
                        <Col span={4}>
                            <InputNumber
                                min={3}
                                max={8}
                                style={{ margin: '0 16px' }}
                                value={inputValue}
                                onChange={this.onChange}
                            />
                        </Col>
                    </Row>}
                    {this.state.nb_player != 0 && <button className="button ceenter" onClick={this.onValidate} >Validate</button>}
                </div>
            </div>
        );
    }
};

export class Button extends React.Component {
    render() {
        return (
            <div>
                <button
                    className="button"
                    onClick={this.props.buttonClick}
                    open={this.props.open}
                > {this.props.buttonName}
                </button>
                <Modal
                    open={this.props.open}
                    buttonClick={this.props.buttonClick}
                    bodyText={this.props.bodyText}
                />
            </div>
        );
    }
};
