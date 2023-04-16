import React, { Component } from 'react';


class Header extends Component {
    render() {

        return(
        <div>

        <h1>Groupie's Pizza{this.props.name}</h1>

        </div>
        );
    }
    
}

export default Header;