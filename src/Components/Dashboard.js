import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getListings } from '../ducks/reducer';
import axios from 'axios';

class Dashboard extends Component {


    componentDidMount() {
        axios.get('./listings').then(res => {
            this.props.getListings(res.data)
        })
    }







    render() {
        console.log(this.props.listings)
        const newListings = this.props.listings.map((e, i) => {
            <h1>{e.propertyname}</h1>
        })
        return (

            <div>
                <Link to='/Step1'>
                    <button>
                        Add new property
                </button>
                </Link>
                <Link to='/'>
                    <button>
                        Logout
                </button>
                </Link>
                <div>
                    {newListings}
                </div>
            </div>

        )


    }





}
function mapStatetoProps(state) {
    return {
        listings: state.listings
    }
}
export default connect(mapStatetoProps, { getListings })(Dashboard);