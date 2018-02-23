import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { typingPropertyName, typingPropertyDescription } from '../ducks/reducer';


class Step1 extends Component {




    render() {

        console.log(this.props.propName)
        console.log(this.props.propDesc)
        return (

            <div>
                <input placeholder="Property Name" onChange={e => this.props.typingPropertyName(e.target.value)}></input>
                <input placeholder="Property Description" onChange={e => this.props.typingPropertyDescription(e.target.value)}></input>
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
function mapStateToProps(state) {
    return {
        propName: state.propName,
        propDesc: state.propDesc
    }
}


export default connect(mapStateToProps, { typingPropertyName, typingPropertyDescription })(Step1);