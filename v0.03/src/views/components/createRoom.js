import React from 'react';
import Select from 'react-select'
import { Slider, InputNumber, Row, Col } from 'antd';

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
            game: [{ value: "yannouf", label: "Yannouf" }, { value: "epiquizz", label: "EpiQuizz" }],
            chosedGame: "",
            nb_player: 0
        };
    }

    handleChange = e => {
        this.setState({ chosedGame: e.value });
        if (e.value == "yannouf") {
            this.setState({nb_player: 3})
        }
        console.log("e)", this.state.chosedGame)
    }

    onChange = value => {
        this.setState({
            inputValue: value,
        });
    };

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
                <p className="modal-content">
                    <div className='SelectGame'>
                        <Select options={this.state.game} onChange={this.handleChange} />
                    </div>
                    {this.state.chosedGame == "yannouf"
                        && <div><p>3 Player Max</p></div>
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
                    {this.state.nb_player != 0 && <Button>Validate</Button>}
                </p>
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
