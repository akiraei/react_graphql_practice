import React, { Component } from 'react';


class Login extends Component {

    render(){
        return(
            <React.Fragment>
            <div>Login</div>
            <div>
                <input class="idInput" placeholder="id"/>
                <input class="pwInput" placeholder="pw"/>
                <button>login</button>
            </div>
            </React.Fragment>
        );
    }

}

export default Login;
