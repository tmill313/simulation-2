import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getListings } from '../ducks/reducer';
import axios from 'axios';
import './Style.css';


class Dashboard extends Component {


    componentDidMount() {
        axios.get('/listings').then(res => {
            this.props.getListings(res.data)
        })
    }
    deleteListing(id) {
        axios.delete(`/deleteListing/${id}`).then(res => {
            this.props.getListings(res.data)
        })
    }







    render() {
        console.log(this.props.listings)
        const newListings = this.props.listings.map((e, i) => (
            <div className="prop-div">
            <div className="pic-div">
                <img src="./auth_logo.png" alt=""></img>
                </div>
                <div className="middle-prop-div">
                <h1>Name: {e.propertyname}</h1>
                <h1>Description: {e.propertydescription}</h1>
                </div>
                <div className="prop-info">
                <h1>Loan: {e.loan}</h1>
                <h1>Desired Rent: {e.desiredrent}</h1>
                <h1>Address: {e.address}</h1>
                <h1>City: {e.city}</h1>
                <h1>State: {e.state}</h1>
                <h1>Zip: {e.zip}</h1>
                <button onClick={() => this.deleteListing(e.propid)}>Delete</button>
                </div>
            </div>

        ))
        return (

            <div className="body-container">
                <header className="header">
                    <div className="header-div">
                    <div className="header-left">
                        <img className="header-logo" src={require("./header_logo.png")} alt="logo"></img>
                        <span className="houser-span">Houser</span>
                        <span className="dashboard-span">Dashboard</span>
                        </div>
                        <Link to='/'>
                            <span className="logout-button">
                                Logout
                </span>
                        </Link>
                    </div>
                </header>
                <div className="green-body">
                    <div  className="newProp-div">
                    <Link to='/Step1'>
                        <button className="newProp-button">
                            Add new property
                </button>
                    </Link>
                    </div>
                    <div className="listing-div">
                    {newListings}
                    </div>
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