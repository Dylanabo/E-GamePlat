import React from 'react';

class Header extends React.Component {
    render() {
        return (
                <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="/home">E-GAMEPLAT</a>
                </nav>
        )
    }
};

export default Header;