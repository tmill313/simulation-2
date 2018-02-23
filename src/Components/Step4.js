import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Step4 extends Component {





    render() {
        return(
    
            <div>
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

export default Step4;