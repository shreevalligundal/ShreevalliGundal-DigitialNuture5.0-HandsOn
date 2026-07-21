import React, { Component } from "react";

class EventExamples extends Component {

    constructor() {

        super();

        this.state = {

            counter: 0

        };

    }

    increment = () => {

        this.setState({

            counter: this.state.counter + 1

        });

    }

    decrement = () => {

        this.setState({

            counter: this.state.counter - 1

        });

    }

    sayHello = () => {

        alert("Hello! Member");

    }

    handleIncrement = () => {

        this.increment();

        this.sayHello();

    }

    sayWelcome = (msg) => {

        alert(msg);

    }

    handleClick = () => {

        alert("I was clicked");

    }

    render() {

        return (

            <div>

                <h2>{this.state.counter}</h2>

                <button onClick={this.handleIncrement}>
                    Increment
                </button>

                <br /><br />

                <button onClick={this.decrement}>
                    Decrement
                </button>

                <br /><br />

                <button
                    onClick={() => this.sayWelcome("Welcome")}
                >
                    Say Welcome
                </button>

                <br /><br />

                <button onClick={this.handleClick}>
                    Click on me
                </button>

            </div>

        );

    }

}

export default EventExamples;