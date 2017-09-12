import React, { Component } from 'react';
import Clock from './Clock.js';


const user = {
    firstName: "Carole",
    lastName: "Olivier"
}

class GuestGreeting extends Component {
    render() {
        return <h1>Please log in</h1>
    }
}

class UserGreeting extends Component {
    render() {
        return <h1>Welcome back</h1>
    }
}

class Greeting extends Component {
    render() {
        return this.props.isLoggedIn ? <UserGreeting/> : <GuestGreeting/>;
    }
}

function LogoutButton(props) {
    return <button onClick={props.click}>Log out</button>;
}

function LoginButton(props) {
    return <button onClick={props.click}>Log in</button>;
}

class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        };
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        const button = isLoggedIn ?
            <LogoutButton click={this.handleLogoutClick}/> :
            <LoginButton click={this.handleLoginClick}/>;
            
        return (
            <div>
                {
                    isLoggedIn &&
                    <h1>Hello {user.firstName}</h1>
                }
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
            </div>
        )
    }

    handleLoginClick() {
        this.setState({
            isLoggedIn: true
        });
    }

    handleLogoutClick() {
        this.setState({
            isLoggedIn: false
        });
    }
}

class Welcome extends Component {
    render() {
        return (
            <div>
                <LoginControl/>
                <Clock/>
            </div>
        );
    }
}

export default Welcome;
