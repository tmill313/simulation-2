import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {




    render() {
        return (

            <div>
                <div>
                    <input placeholder="username"></input>
                    <input placeholder="password"></input>
                </div>
                <Link to='/Dashboard'>
                    <button>
                        Login
            </button>
                </Link>
                <Link to='/Dashboard'>
                    <button>
                        Register
            </button>
                </Link>
            </div>

        )


    }



}



export default Login;