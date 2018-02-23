import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Step1 extends Component {




    render() {
        return(
    
            <div>
                <Link to='/Step2'>
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

export default Step1;