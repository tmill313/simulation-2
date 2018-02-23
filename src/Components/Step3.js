import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { typingImageurl } from '../ducks/reducer';

class Step3 extends Component {







    render() {

        return (

            <div>
                <h1>image preview</h1>
                <input placeholder="image URL" onChange={e => this.props.typingImageurl(e.target.value)}></input>
                <Link to='/Step4'>
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
        imageurl: state.imageurl
    }
}


export default connect(mapStateToProps, { typingImageurl })(Step3);