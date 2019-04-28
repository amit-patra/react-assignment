import React, { Component } from 'react';
import axios from 'axios';
import ReactTooltip from 'react-tooltip'
class ToolsList extends Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
        this.search = this.search.bind(this);
        this.searchHandler = this.searchHandler.bind(this);
        this.state = {
            error: null,
            isLoaded: false,
            imageLoadError: true,
            ToolsItem: [],
            serachData: "",
            ToolsName: [],
            ToolsList: []
        }

    }
    componentDidMount() {
        // this.LoadToolsList();
    }
    goBack() {
        this.props.history.push("/");
    }
    searchHandler = (e) => {
        this.state.ToolsName = [];
        this.state.ToolsList = [];
        this.setState({ [e.target.name]: e.target.value, ToolsItem: [] })
    }
    search = (e) => {
        if (this.state.serachData) {
            this.state.ToolsName = [];
            this.state.ToolsList = [];
            let projectId = this.state.serachData;
            axios.get(`http://localhost:9000/viewTools/${projectId}`)
                .then(res => {
                    // console.log(res.data);
                    let toolsResponseData = res.data;
                    this.setState({
                        isLoaded: true,
                        ToolsItem: toolsResponseData
                    });
                })
                .catch((error) => {

                    this.setState({
                        isLoaded: false,
                        ToolsItem: []
                    });
                });
        }
        else {
            alert("Please enter projectId");
        }
        e.preventDefault();
    }


    checkImage(urlToFile) {
        var xhr = new XMLHttpRequest();
        xhr.open('HEAD', urlToFile, false);
        xhr.send();

        if (xhr.status == "404") {
            console.log("File doesn't exist");
            return false;
        } else {
            console.log("File exists");
            return true;
        }
    }
    getFileName(key, fileName){
        var data = require('./tools.json');
        if(data[key].indexOf(fileName)>=0){
            return fileName
        }
        else{
            return "defaultImage";
        }
    }
    getToolData(ToolsHeader, ToolDetails) {
        for (var key in ToolDetails) {
            if (key == `${ToolsHeader}Tools`) {
                let fileName = ToolDetails[key];
                let checkExistFile = this.getFileName(ToolsHeader,fileName);
                return (
                    <React.Fragment> 
                        <img className="tool-img-icon" key={checkExistFile} data-tip={checkExistFile} src={require(`../../assets/icon/${checkExistFile}.png`)} />
                        <ReactTooltip />
                    </React.Fragment>
                    
                )
            }
        }
        // return Data
    }
    ScrollLeft() {
        var elmnt = document.getElementById("Tools-list-bar");
        elmnt.scrollLeft += 50;
    }
    ScrollRight() {
        var elmnt = document.getElementById("Tools-list-bar");
        elmnt.scrollLeft -= 50;
    }

    render() {
        const { error, isLoaded, ToolsItem, serachData } = this.state;
        let ToolsHeader, ToolsDetails, checkStatus;
        if (ToolsItem.length == 0) {
            return (
                <React.Fragment>
                    <form className="example" style={{ margin: 'auto', maxWidth: '300px', marginTop: '5px' }}>
                        <input type="text" placeholder="Search.." name="serachData" value={serachData} onChange={this.searchHandler} />
                        <button type="submit" onClick={this.search}><i className="fa fa-search"></i></button>
                    </form>
                    <h1>No data</h1>
                    <div>
                        <button className="btn btn-danger" onClick={this.goBack}>Back</button>
                    </div>
                </React.Fragment>
            )
        }
        else if (ToolsItem) {
            if (Object.values(this.state.ToolsItem).length > 0) {
                let objLength = Object.values(this.state.ToolsItem).length
                for (let i = 0; i < objLength; i++) {
                    let ToolsName = Object.keys(this.state.ToolsItem)[i];
                    ToolsName = ToolsName.split("Tools")[0];
                    this.state.ToolsName.push(ToolsName);

                }
            }


            var self = ToolsItem;
            ToolsDetails = this.state.ToolsName.map((ToolsHeader, index) => {
                return (
                    <div className="tools-panel" key={index}>
                        <p className="tool-name">{ToolsHeader}</p>
                        <hr className="line" />
                        <div>
                            {this.getToolData(ToolsHeader, self)}
                        </div>
                    </div>
                )

            })
        }
        return (
            <React.Fragment>
                <form className="example" style={{ margin: 'auto', maxWidth: '300px', marginTop: '5px' }}>
                    <input type="text" placeholder="Search.." name="serachData" value={serachData} onChange={this.searchHandler} />
                    <button type="submit" onClick={this.search}><i className="fa fa-search"></i></button>
                </form>
                <div className="container" style={{ width: "100%", marginTop: "10px" }} >

                    {/* Start New JSX */}
                    <div className="row tool-list-area">
                        <div className="col-md-1 padding-0 col-md-1point5" >
                            <button className="pull-left arrow-btn" onClick={this.ScrollRight}>
                                <i className="fa fa-angle-double-left"></i>
                            </button>
                        </div>
                        <div className="col-md-10 padding-0 col-md-10point5" >
                            <div id="Tools-list-bar">
                                <div id="content">
                                    {ToolsDetails}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-1 padding-0 col-md-2point5" >
                            <button className="pull-right arrow-btn" onClick={this.ScrollLeft}><i className="fa fa-angle-double-right"></i></button>
                        </div>
                    </div>
                    {/* End New JSX */}
                </div>
                <div>
                    <button className="btn btn-danger" onClick={this.goBack}>Back</button>
                </div>

            </React.Fragment>

        )
    }
}
export default ToolsList