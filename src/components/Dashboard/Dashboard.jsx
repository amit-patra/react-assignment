import React, {Component} from 'react';
import Header from '../Header/Header'
class Dashboard extends Component{
    constructor(props) {
        super(props);
        this.state={};
        }
    render(){
        return(
            <React.Fragment>
            {/* <Header /> */}
            <div>Dashboard Page</div>
            </React.Fragment>
            
        )
    }
}
export default Dashboard;