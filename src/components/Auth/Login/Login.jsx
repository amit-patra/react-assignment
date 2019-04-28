import React, {Component} from 'react';
// import { Redirect,Router } from 'react-router-dom'
import data from '../../../data.json';
class Login extends Component{
constructor(props) {
    super(props);
    this.state={
        username:'',
        password:''
    }
  }
      loginFormSubmit=(e)=>{
          console.log(this.state);
          console.log(data);
        //   const alert = useAlert()
        //   alert.show('Oh look, an alert!')
          if(data.username === this.state.username && data.password === this.state.password){
            this.props.history.push("/dashboard");
          }
          else{
              alert('Please enter valid username and password');
          }
          e.preventDefault();
      }
      userHandler = (e) =>{
            this.setState({[e.target.name]: e.target.value})
      }
    render(){
        const {username, password} = this.state;
       
        return(
            <React.Fragment>
            <form onSubmit={this.loginFormSubmit}>
            <div className="login">
                <input type="text" placeholder="Username" name="username" value={username} onChange={this.userHandler}/>  
                <input type="password" placeholder="Password" name="password" value={password} onChange={this.userHandler} />  
                <a href="#" className="forgot">forgot password?</a>
                {/* <input type="submit" value="Sign In" /> */}
                <button type="submit" className="submit-btn">Sign In</button>
            </div>
            </form>
            <div className="shadow"></div>
            </React.Fragment>
        )
    }
}
export default Login;