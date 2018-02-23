import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Step5 extends Component {






    render() {
        return(
    
            <div>
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

export default Step5