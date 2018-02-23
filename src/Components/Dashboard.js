import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Dashboard extends Component {


    render() {
        return(
    
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
            </div>
    
        )
    
    
    }





}

export default Dashboard;