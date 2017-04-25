import React from 'react';
import {connect} from 'react-redux';
import App from './index.jsx';
import { addToGood, addToBad, getNewImage } from '../actions.js';

export const ConnectedApp=connect(
    function mapStateToProps(state) {
        return {
            good: state.good,
            bad: state.bad,
            current: state.current
        }
    },
    function mapDispatchToProps(dispatch) {
        return {
            addToGood: link=>dispatch(addToGood(link)),
            addToBad: link=>dispatch(addToBad(link)),
            getNewImage: ()=>dispatch(getNewImage())
        }
    }
)(App);