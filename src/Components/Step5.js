import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {typingDesiredRent} from '../ducks/reducer';

class Step5 extends Component {






    render() {
        console.log(this.props.desiredRent)
        console.log(this.props.loanAmount)
        return (

            <div>
                <input placeholder="Desired Rent" onChange={e => this.props.typingDesiredRent(e.target.value)}></input>
                <Link to='/Dashboard'>
                    <button>
                        complete
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
    return{
        desiredRent: state.desiredRent,
        loanAmount: state.loanAmount
    }
}

export default connect(mapStateToProps, {typingDesiredRent})(Step5)