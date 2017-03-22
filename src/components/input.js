import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './input.css';

const Input = React.createClass({
    getInitialState() {
        return {
            inputValue: ''
        };
    },

    quoiQuiChange(e) {
        this.setState({
            inputValue: e.target.value
        });
    },

    quoiQuiClick() {
        document.getElementById('list').innerHTML += "<li>" + this.state.inputValue + "</li>";
    },

    render() {
        return (
            <div>
                <h1>Todo list using React.js</h1>
                <input type="text" onChange={this.quoiQuiChange} />
                <br />
                <input type="button" value="Add a new task" onClick={this.quoiQuiClick} />
            </div>
        );
    }
});

export default Input;