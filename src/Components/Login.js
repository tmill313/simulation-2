import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {typingUsername, typingPassword} from '../ducks/reducer';
import axios from 'axios';
import './Style.css';

class Login extends Component {
    constructor() {
        super();


        this.addUser=this.addUser.bind(this);
    }

        addUser() {
            let body = {username: this.props.username, password: this.props.password}
            axios.post('/newUser', body).then(res => {
                console.log('got heem')
                
            })
        }


    render() {
        return (
            <div className="body-container">
                <div className="white-body">
                    <img className="login-logo" src={require("./auth_logo.png")} alt="logo"></img>

                <div className="login-input">
                    <input className="auth-input" placeholder="username" onChange={e => this.props.typingUsername(e.target.value)}></input> <br />
                    <input className="auth-input" placeholder="password" onChange={e => this.props.typingPassword(e.target.value)}></input>
                </div>
                <div className="login-button-div">
                <Link to='/Dashboard'>
                    <button className="login-button">
                        Login
            </button>
                </Link>
                <Link to='/Dashboard'>
                    <button className="register-button" onClick={this.addUser}>
                        Register
            </button>
                </Link>
                </div>
                </div>
            </div>

        )


    }



}
function mapStateToProps(state) {
    return{
        username: state.username,
        password: state.password
    }
}


export default connect(mapStateToProps, {typingPassword, typingUsername})(Login);