import React, { Component } from "react";
import axiosInstance from "../api_calls/axiosApi";

class Signup extends Component{
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password: "",
            first_name: "",
            last_name: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    async handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await axiosInstance.post('/register/', {
                email: this.state.email,
                password: this.state.password,
                first_name: this.state.first_name,
                last_name: this.state.last_name
            });
            return response;
        } catch (error) {
            console.log(error.stack);
            this.setState({
                errors:error.response.data
            });
        }
    }

    render() {
        return (
            <div>
                Signup
                <form onSubmit={this.handleSubmit}>

                    <label>
                        Email:
                        <input name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
                    </label>
                    <label>
                        Password:
                        <input name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
                    </label>
                    <label>
                        First Name:
                        <input name="first_name" type="text" value={this.state.username} onChange={this.handleChange}/>
                    </label>
                    <label>
                        Last Name:
                        <input name="last_name" type="text" value={this.state.username} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}
export default Signup;