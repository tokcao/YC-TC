import React, { Component } from 'react';
import axios from 'axios'
import cookie from 'react-cookies'
import config from '../../config/config'

class SignUp extends Component {

    state = {
        username: "",
        password: "",
        email: "",
        phone: "",
        msg: ""
    }

    onChangeHandler = (e) => {
        console.log(e);
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    onSubmitHandler = () => {
        // console.log(`Username: ${this.state.username}`);
        axios.post(config.host + '/signup', {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            phone: this.state.phone
        }).then(res => {
            if (res.status === 200) {
                // this.props.onSubmitHandler(res.data);
                // if(res.data){
                // cookie.save(`username: ${this.state.username}`);
                // }else{
                // this.setState({
                // msg: "Login Failed!"
                // })
                // }
                this.props.history.push('./login')

            }
        })
    }

    // onSignUpHandler = () => {
    //     this.props.history.push('./signup')
    // }

    render() {
        return (
            <React.Fragment>
                <h1>Sign Up</h1>
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" value={this.state.username} onChange={this.onChangeHandler} /><br />
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" value={this.state.password} onChange={this.onChangeHandler} /><br />
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" value={this.state.email} onChange={this.onChangeHandler} /><br/>
                <label htmlFor="phone">Phone: </label>
                <input type="number" id="phone" value={this.state.phone} onChange={this.onChangeHandler} /><br/>
                {/* <input type="button" value="Login" onClick={this.onSubmitHandler} /> */}
                <input type="button" value="Sign Up" onClick={this.onSubmitHandler} />
                <p>{this.state.msg}</p>
            </React.Fragment>
        )
    }
}

export default SignUp;