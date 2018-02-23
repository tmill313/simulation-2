import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {typingDesiredRent, cancelListing} from '../ducks/reducer';
import axios from 'axios';
import {Redirect} from 'react-router'



class Step5 extends Component {
    constructor() {
        super()

        this.state = {
            redirect: false
        }




        this.createListing=this.createListing.bind(this)
    }

    createListing() {
        let body = {
            desiredRent: this.props.desiredRent,
            loanAmount: this.props.loanAmount,
            propName: this.props.propName,
            propDesc: this.props.propDesc,
            address: this.props.address,
            city: this.props.city,
            state: this.props.state,
            zip: this.props.zip,
            imageurl: this.props.imageurl,
            monthlyMort: this.props.monthlyMort
        }
        axios.post('/createListing', body).then(res => {
            console.log('has fired')
            this.setState({
                redirect: true
            })
        })
    }




    render() {
        if(this.state.redirect) {
            return <Redirect to="/Dashboard"/>
        }
        return (

            <div>
                <input placeholder="Desired Rent" onChange={e => this.props.typingDesiredRent(e.target.value)}></input>
                    <button onClick={() => this.createListing()}>
                        complete
                </button>
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
        loanAmount: state.loanAmount,
        propName: state.propName,
        propDesc: state.propDesc,
        address: state.address,
        city: state.city,
        state: state.state,
        zip: state.zip,
        imageurl: state.imageurl,
        monthlyMort: state.monthlyMort
    }
}

export default connect(mapStateToProps, {typingDesiredRent, cancelListing})(Step5)