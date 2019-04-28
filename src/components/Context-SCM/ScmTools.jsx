import React, { Component } from 'react';
import './ScmTools.css';
class ScmTools extends Component {
    constructor() {
        super();
        this.state = {
            Tools: [
                { ToolName: "Git", value: "Git" },
                { ToolName: "GitHub", value: "GitHub" },
                { ToolName: "BitBucket", value: "BitBucket" },
                { ToolName: "GitLabs", value: "GitLabs" },
                { ToolName: "Others", value: "Others" }
            ],
            PM: [
                { ToolName: "Jira", value: "Jira" },
                { ToolName: "Others", value: "Others" }
            ],
            AgileTools:[
                { ToolName: "Scrum", value: "Scrum" },
                { ToolName: "KanBan", value: "KanBan" },
                { ToolName: "Others", value: "Others" }
            ],
            BuildServerTools:[
                { ToolName: "Jenikins", value: "Jenikins" },
                { ToolName: "Bamboo", value: "Bamboo" },
                { ToolName: "Travis", value: "Travis" },
                { ToolName: "CircleCl", value: "CircleCl" },
                { ToolName: "Gitrunner", value: "Gitrunner" },
                { ToolName: "BuddyWorks", value: "BuddyWorks" },
                { ToolName: "Others", value: "Others" }
            ],
            UnitTestTools:[
                { ToolName: "NUnit", value: "NUnit" },
                { ToolName: "Junit", value: "Junit" },
                { ToolName: "Others", value: "Others" }
            ],
            CodeCoverageTools:[
                { ToolName: "SonarQube", value: "SonarQube" },
                { ToolName: "NewRelic", value: "NewRelic" },
                { ToolName: "Others", value: "Others" }
            ],
            BugTrackingTools:[
                { ToolName: "Jira", value: "Jira" },
                { ToolName: "Bugzila", value: "Bugzila" },
                { ToolName: "Others", value: "Others" }
            ],
            DeliveryTools:[
                { ToolName: "Docker", value: "Docker" },
                { ToolName: "Kubernetes", value: "Kubernetes" },
                { ToolName: "AWS", value: "AWS" },
                { ToolName: "GCE", value: "GCE" },
                { ToolName: "Azure", value: "Azure" },
                { ToolName: "Others", value: "Others" }
            ],
           DeploymentTools:[
                { ToolName: "Artifactory", value: "Artifactory" },
                { ToolName: "Nexus", value: "Nexus" },
                { ToolName: "Others", value: "Others" }
            ],
        }
    }
    render() {
        let ToolsOptions = this.state.Tools.map(element => (
            <option value={element.value} key={element.value} >{element.ToolName}</option>
        ))
        let PmToolsOptions = this.state.PM.map(element => (
            <option value={element.value} key={element.value} >{element.ToolName}</option>
        ))
        let AgileToolsOptions = this.state.PM.map(element => (
            <option value={element.value} key={element.value} >{element.ToolName}</option>
        ))
        let BuildServerToolsOptions = this.state.PM.map(element => (
            <option value={element.value} key={element.value} >{element.ToolName}</option>
        ))
        let UnitTestToolsOptions = this.state.PM.map(element => (
            <option value={element.value} key={element.value} >{element.ToolName}</option>
        ))
        let CodeCoverageToolsOptions = this.state.PM.map(element => (
            <option value={element.value} key={element.value} >{element.ToolName}</option>
        ))
        let BugTrackingToolsOptions = this.state.PM.map(element => (
            <option value={element.value} key={element.value} >{element.ToolName}</option>
        ))
        let DeliveryToolsOptions = this.state.PM.map(element => (
            <option value={element.value} key={element.value} >{element.ToolName}</option>
        ))
        let DeploymentToolsOptions = this.state.PM.map(element => (
            <option value={element.value} key={element.value} >{element.ToolName}</option>
        ))
        return (
            <React.Fragment>
                <h1>SCM Assignment</h1>
                <form>
                    <div className="tools-panel">
                        <div>
                            <label className="label-pos">Scm</label>
                            <select className="input-field drop-down drop-down" name="scmTools">
                                {ToolsOptions}
                            </select>
                        </div>
                        <div>
                            <label className="label-pos">PM</label>
                            <select className="input-field drop-down drop-down" name="pmTools">
                                {PmToolsOptions}
                            </select>
                        </div>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}
export default ScmTools;