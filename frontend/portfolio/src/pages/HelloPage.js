
import React, { Component } from "react";
import axiosInstance from "../api_calls/axiosApi";

class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message:"",
        };

        this.getMessage = this.getMessage.bind(this)
        this.handleLogout = this.handleLogout.bind(this);
    }

    async getMessage(){
        try {
            let response = await axiosInstance.get('/hello/');
            const message = response.data.hello;
            this.setState({
                message: message,
            });
            return message;
        }catch(error){
            console.log("Error: ", JSON.stringify(error, null, 4));
            throw error;
        }
    }

    async handleLogout() {
        try {
            const response = await axiosInstance.post('/blacklist/', {
                "refresh_token": localStorage.getItem("refresh_token")
            });
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            axiosInstance.defaults.headers['Authorization'] = null;
            return response;
        }
        catch (e) {
            console.log(e);
        }
    };
    
    componentDidMount(){
        // It's not the most straightforward thing to run an async method in componentDidMount

        // Version 1 - no async: Console.log will output something undefined.
        const messageData1 = this.getMessage();
        console.log("messageData1: ", JSON.stringify(messageData1, null, 4));
    }

    render(){
        return (
            <div>
                <p>{this.state.message}</p>
                <button onClick={this.handleLogout}>Logout</button>
            </div>
        )
    }
}

export default Hello;