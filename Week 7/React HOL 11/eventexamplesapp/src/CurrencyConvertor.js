import React, { Component } from "react";

class CurrencyConvertor extends Component {

    constructor() {

        super();

        this.state = {

            amount: "",
            currency: ""

        };

    }

    handleChange = (event) => {

        this.setState({

            [event.target.name]: event.target.value

        });

    }

    handleSubmit = (event) => {

        event.preventDefault();

        const euro = this.state.amount / 90;

        alert(
            "Converted Amount: " +
            euro.toFixed(2) +
            " Euro"
        );

    }

    render() {

        return (

            <div style={{ marginTop: "40px" }}>

                <h1 style={{ color: "green" }}>
                    Currency Convertor!!!
                </h1>

                <form onSubmit={this.handleSubmit}>

                    <label>Amount </label>

                    <input
                        type="number"
                        name="amount"
                        value={this.state.amount}
                        onChange={this.handleChange}
                    />

                    <br /><br />

                    <label>Currency </label>

                    <input
                        type="text"
                        name="currency"
                        value={this.state.currency}
                        onChange={this.handleChange}
                    />

                    <br /><br />

                    <button type="submit">
                        Submit
                    </button>

                </form>

            </div>

        );

    }

}

export default CurrencyConvertor;