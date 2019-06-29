import React, { Component } from 'react';
import axios from 'axios'
import cookie from 'react-cookies'
import config from '../../config/config'

// const Login = (props) => {
//     return (
//         <form onSubmit={props.getUser}>
//             <input style={{ margin:"20px auto", display:"block" }} type="text" name="username"/>
//             <button>Submit</button>
//         </form>
//     )
// }

class Login extends Component {

    state = {
        username: "",
        password: "",
        msg: ""
    }

    onChangeHandler = (e) => {
        console.log(e);
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    onSubmitHandler = () => {
        console.log(`Username: ${this.state.username}`);
        axios.post(config.host + '/login', {
            username: this.state.username,
            password: this.state.password
        }).then(res => {
            if(res.status === 200){
                this.props.onSubmitHandler(res.data);
                if(res.data){
                    cookie.save(`username: ${this.state.username}`);
                }else{
                    this.setState({
                        msg: "Login Failed!"
                    })
                }
            }
        })
    }

    onSignUpHandler = () => {
        this.props.history.push('./signup')
    }

    render(){
        return(
            <React.Fragment>
                <h1>Login</h1>
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" value={this.state.username} onChange={this.onChangeHandler}/><br/>
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" value={this.state.password} onChange={this.onChangeHandler}/><br/>
                <input type="button" value="Login" onClick={this.onSubmitHandler}/>
                <input type="button" value="Sign Up" onClick={this.onSignUpHandler}/>
                <p>{this.state.msg}</p>
            </React.Fragment>
        )
    }
}

export default Login;