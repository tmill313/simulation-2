import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { typingAddress, typingCity, typingState, typingZip } from '../ducks/reducer'

class Step2 extends Component {



    render() {
        console.log(this.props.address)
        console.log(this.props.city)
        console.log(this.props.state)
        console.log(this.props.zip)
        return (

            <div>
                <input placeholder="address" onChange={e => this.props.typingAddress(e.target.value)}></input>
                <input placeholder="city" onChange={e => this.props.typingCity(e.target.value)}></input>
                <input placeholder="state" onChange={e => this.props.typingState(e.target.value)}></input>
                <input placeholder="zip" onChange={e => this.props.typingZip(e.target.value)}></input>
                <Link to='/Step3'>
                    <button>
                        next step
                </button>
                </Link>
                <Link to='/'>
                    <button>
                        Logout
                </button>
                </Link>
                <Link to='/Dashboard'>
                    <button>
                        Cancel
                </button>
                </Link>
            </div>

        )


    }


}

function mapStateToProps(state) {
    return {
        address: state.address,
        city: state.city,
        state: state.state,
        zip: state.zip
    }
}

export default connect(mapStateToProps, { typingAddress, typingCity, typingState, typingZip })(Step2);