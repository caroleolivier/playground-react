import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';

export class AddTodo extends React.Component {
    onClick() {
        console.log('click', this)
        this.props.dispatch(addTodo('Hello world'));
    }

    render() {
        return (
            <div onClick={() => this.onClick()}>Click</div>
        );
    }
}

export default connect()(AddTodo)