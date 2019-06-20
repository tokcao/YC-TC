import React, {Component} from "react";
import {
    HelpBlock,
    FormGroup,
    FormControl,
    ControlLabel
} from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import ".Signup.css";

export default class Signup extends Component {
    constructor(props){
        super(props);

        this.state = {
            // isLoading: false,
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            newUser: null
        };
    }

    validateForm(){
        return (
            this.state.email.length > 0 &&
            this.state.password.length > 0 &&
            this.state.confirmPassword === this.state.password
        );
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = async event => {
        event.preventDefault();
        this.setState({isLoading: true});
        this.setState({newUser:"test"});
        this.setState({isLoading: false});
    }

    renderForm(){
        return (
            <form onSubmit={this.handleSubmit}>
                <FormGroup controlID="email" bsSize="large">
                    
                </FormGroup>
            </form>
        )
    }
}