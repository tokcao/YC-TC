import React, { Component } from 'react'
import './App.css'
// import axios from 'axios'
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom'
// import { Redirect } from 'react-router'


//https://api.github.com/users/tokcao

import Login from './component/auth/Login'
import SignUp from './component/auth/SignUp'

class App extends Component {

  state = {
    // repos: null
    loggedIn: false
  }

  // getUser = (e) => {
  //   e.preventDefault();
  //   const user = e.target.elements.username.value;
  //   // console.log(user);
  //   if (user) {
  //     axios.get(`https://api.github.com/users/${user}`)
  //       .then((res) => {
  //         // console.log(res)
  //         const repos = res.data.public_repos;
  //         this.setState({ repos: repos })
  //         console.log(repos);
  //       })
  //   } else return;
  // }

  onLoggedInHandler = (status) => {
    console.log(`called`)
    this.setState({
      loggedIn: status
    });
  }

  render() {
    return (
      // {/* <div className="App">
      //   <header className="App-header">
      //     <h1 className="App-title">
      //       HTTP Calls in React
      //     </h1>

      //     <Login getUser={this.getUser} />
      //     {this.state.repos ? <p>Number of repos: {this.state.repos}</p> :
      //       <p>Please enter a username.</p>}
      //   </header>
      // </div> */}
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <h1>
              Fancy React Axios
          </h1>
            <Switch>
              <Route path="/login" render={(props) => <Login {...props} onLoggedInHandler={this.onLoggedInHandler} />} />
              <Route path="/signup" render={(props) => <SignUp {...props} onLoggedInHandler={this.onLoggedInHandler} />} />
              {this.state.loggedIn ? null : <Redirect to="/login"></Redirect>}

            </Switch>
          </header>
        </div>
      </BrowserRouter>
    )
  }
}

export default App