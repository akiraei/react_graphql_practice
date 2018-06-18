import React, { Component } from 'react';
import Login from './Login'


class Head extends Component {

    render(){
        return(
            <div>
                <span>Goods</span>
                <span>info</span>
                <Login/>
            </div>
        );
    }

}

export default Head;
