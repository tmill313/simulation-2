import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {typingLoanAmount, typingMonthlyMortgage} from '../ducks/reducer';

class Step4 extends Component {





    render() {

        return (

            <div>
                <input placeholder="Loan Amount" onChange={e => this.props.typingLoanAmount(e.target.value)}></input>
                <input placeholder="Monthly Mortgage" onChange={e => this.props.typingMonthlyMortgage(e.target.value)}></input>
                <Link to='/Step5'>
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
        loanAmount: state.loanAmount,
        monthlyMort: state.monthlyMort
    }
}

export default connect(mapStateToProps, {typingLoanAmount, typingMonthlyMortgage})(Step4);