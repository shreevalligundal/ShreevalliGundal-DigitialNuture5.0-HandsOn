import React, { Component } from "react";

class ComplaintRegister extends Component {

    constructor(props) {

        super(props);

        this.state = {

            employeeName: "",
            complaint: ""

        };

    }

    handleChange = (event) => {

        this.setState({

            [event.target.name]: event.target.value

        });

    }

    handleSubmit = (event) => {

        event.preventDefault();

        const referenceNumber = Math.floor(
            100000 + Math.random() * 900000
        );

        alert(
            `Complaint Registered Successfully!\n\n` +
            `Reference Number: ${referenceNumber}`
        );

        this.setState({

            employeeName: "",
            complaint: ""

        });

    }

    render() {

        return (

            <div style={{ margin: "40px" }}>

                <h2>Ticket Raising App</h2>

                <form onSubmit={this.handleSubmit}>

                    <label>Employee Name:</label>

                    <br />

                    <input
                        type="text"
                        name="employeeName"
                        value={this.state.employeeName}
                        onChange={this.handleChange}
                        required
                    />

                    <br /><br />

                    <label>Complaint:</label>

                    <br />

                    <textarea
                        name="complaint"
                        rows="5"
                        cols="40"
                        value={this.state.complaint}
                        onChange={this.handleChange}
                        required
                    />

                    <br /><br />

                    <button type="submit">
                        Submit Complaint
                    </button>

                </form>

            </div>

        );

    }

}

export default ComplaintRegister;