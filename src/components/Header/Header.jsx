import React, {Component} from 'react';
import { BrowserRouter as 
    Router,
    Link,
    NavLink,
    Redirect
} from "react-router-dom";
class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
          }
          console.log(props);
        // this.sighnOutHandler = this.sighnOutHandler.bind(this);
        }
        componentDidMount(){
            console.log(this.props);
          }
    sighnOutHandler=() =>{
        alert("Hi")
        // this.props.history.push("/login")
       
    }
    goToLogin=()=>{
        alert('Hello');
        console.log(this.props);
        // this.setState({ redirect: true })
    }
    render(){
        console.log(this.props);
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to='/'/>;
          }
        return(
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <a className="navbar-brand" href="#">WebSiteName</a>
                    </div>
                    <ul className="nav navbar-nav">
                    <li className="active"><a href="#">Home</a></li>
                    <li><a href="#">Page 1</a></li>
                    <li><a href="#">Page 2</a></li>
                    <li onClick={this.sighnOutHandler = this.sighnOutHandler.bind(this)}><a>Signout</a></li>
                    <li><NavLink activeClassName="" exact strict to='/'>Go to Login</NavLink></li>
                    <li><NavLink activeClassName="" exact strict to='/dashboard'>Go to Dashboard</NavLink></li>
                    <button onClick={() => this.goToLogin()}>Go Login </button>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Header;