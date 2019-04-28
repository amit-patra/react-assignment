import React, { Component } from 'react';
import axios from 'axios';
class Form extends Component {
    constructor(){
        super();
        this.state = {
            fields: {
                // 'hobbies':{
                //     "game":false,
                //     "cricket":false,
                //     "music":false
                // }
            },
            errors: {},
            othersData:""
          }
        this.submitProfile = this.submitProfile.bind(this);
        this.myHandler = this.myHandler.bind(this);
        this.addOtherState = this.addOtherState.bind(this);
        this.myOhtersHandler = this.myOhtersHandler.bind(this);
    }
    myHandler(e){
        let fields = this.state.fields;
        let element = document.getElementById("otherStateInput");
        if(e.target.value == "otherState"){
            element.style.display="inline";
        }
        else{
            element.style.display="none";
        }
        fields[e.target.name] = e.target.value;
        // if(this.state.fields.hobby){
        //     this.state.fields.hobby.push(e.target.value)
        // }
        this.setState({
          fields
        });
  
      }
      myOhtersHandler(e){
          this.setState({
            othersData:e.target.value
          });
      }
      addOtherState=(e)=>{
        if (e.key === 'Enter') {
            alert(`you have enter ${e.target.value}`);
        }
          
      }
    submitProfile=(e)=>{
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["firstname"] = "";
            fields["lastname"] = "";
            fields["phone"]="";
            fields["email"]="";
            fields["country"]="";
            fields["state"]=""; 
            fields["address"]=""; 
            fields["gender"]=""; 
            fields["hobbies"]="";
            fields["otherstate"]=""; 
            this.setState({fields:fields});

           
            console.log(this.state.fields);
            let Userdata = this.state.fields;
            axios.post(`https://jsonplaceholder.typicode.com/users`, Userdata)
            .then(res => {
                console.log(res.data);
                alert("From has been submit");
            })
        }        
    }
    validateForm(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        // For firstname
        if (!fields["firstname"]) {
            formIsValid = false;
            errors["firstname"] = "*Please enter your firstname.";
          }
          if (typeof fields["firstname"] !== "undefined") {
              if (!fields["firstname"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["firstname"] = "*Please enter alphabet characters only.";
              }
            }
            // For lastname
            if (!fields["lastname"]) {
                formIsValid = false;
                errors["lastname"] = "*Please enter your lastname.";
              }
              if (typeof fields["lastname"] !== "undefined") {
                  if (!fields["lastname"].match(/^[a-zA-Z ]*$/)) {
                    formIsValid = false;
                    errors["lastname"] = "*Please enter alphabet characters only.";
                  }
                }
                // For phone
                if (!fields["phone"]) {
                    formIsValid = false;
                    errors["phone"] = "*Please enter your phone no.";
                  }
                  if (typeof fields["phone"] !== "undefined") {
                      if (!fields["phone"].match(/^[0-9]{10}$/)) {
                        formIsValid = false;
                        errors["phone"] = "*Please enter valid phone no.";
                      }
                    }
                    // For Email
                    if (!fields["email"]) {
                        formIsValid = false;
                        errors["email"] = "*Please enter your email-ID.";
                      }
                
                      if (typeof fields["email"] !== "undefined") {
                        //regular expression for email validation
                        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
                        if (!pattern.test(fields["email"])) {
                          formIsValid = false;
                          errors["email"] = "*Please enter valid email-ID.";
                        }
                      }
                    //   Country
                      if (!fields["country"]) {
                        formIsValid = false;
                        errors["country"] = "*Please select country";
                      }
                    //   State
                    if (!fields["state"]) {
                        formIsValid = false;
                        errors["state"] = "*Please select state";
                      }
                    //   Address
                    if (!fields["address"]) {
                        formIsValid = false;
                        errors["address"] = "*Please enter address";
                      }
                    //   gender

                    if (!fields["gender"]) {
                        formIsValid = false;
                        errors["gender"] = "*Please select gender";
                      }

            this.setState({
                errors: errors
              });
              return formIsValid;
    }
    render() {
        return (
            <React.Fragment>
                <h1>Create Profile</h1>
                <form>
                    <div className="login">
                        <div>
                            <label className="label-pos">Firstname</label>
                            <input className="input-field drop-down" type="text" placeholder="First Name" name="firstname" value={this.state.fields.firstname || '' } onChange={this.myHandler} />
                            <div className="errorMsg">{this.state.errors.firstname}</div>
                        </div>
                        <div>
                            <label className="label-pos">Lastname</label>
                            <input className="input-field drop-down" type="text" placeholder="Last Name" name="lastname" value={this.state.fields.lastname || '' } onChange={this.myHandler} />
                            <div className="errorMsg">{this.state.errors.lastname}</div>
                        </div>
                        <div>
                            <label className="label-pos">Phone number</label>
                            <input className="input-field drop-down" inputMode="numeric" placeholder="Phone Number" name="phone"  value={this.state.fields.phone || '' } onChange={this.myHandler} />
                            <div className="errorMsg">{this.state.errors.phone}</div>
                        </div>
                        <div>
                            <label className="label-pos">Email</label>
                            <input className="input-field drop-down drop-down" type="email" placeholder="Email" name="email" value={this.state.fields.email || '' } onChange={this.myHandler}/>
                            <div className="errorMsg">{this.state.errors.email}</div>
                        </div>
                        <div>

                            <label className="label-pos">Country</label>
                            <select className="input-field drop-down drop-down" name="country" value={this.state.fields.country || ''} onChange={this.myHandler}>
                                <option >Please Select</option>
                                <option value="india">India</option>
                                <option value="us">Us</option>
                                <option value="uk">UK</option>
                            </select>
                            <div className="errorMsg">{this.state.errors.country}</div>
                        </div>
                        <div>
                            <label className="label-pos">State</label>
                            <select className="input-field drop-down drop-down" name="state"  value={this.state.fields.state || ''} onChange={this.myHandler}>
                                <option>Please Select</option>
                                <option value="karnataka">Karnataka</option>
                                <option value="tamilnadu">Tamilnadu</option>
                                <option value="westbengal">Westbengal</option>
                                <option value="otherState">Others</option>
                            </select>
                            <input type="text" className="input-field drop-down" name="otherState" placeholder="Please enter state name" id="otherStateInput" style={{display:'none'}} value={this.state.othersData} onChange={this.myOhtersHandler} onKeyDown={this.addOtherState}/>
                            <div className="errorMsg">{this.state.errors.state}</div>
                        </div>
                        <div>
                            <label className="label-pos">Address</label>
                            <textarea className="input-field drop-down drop-down" type="text" placeholder="Address" name="address" value={this.state.fields.address || ''} onChange={this.myHandler} />
                            <div className="errorMsg">{this.state.errors.address}</div>
                        </div>
                        <div className="gander-panel">
                            <label className="gender-label">
                                Gender
                        </label>
                            <label className="radio-inline">
                                <input type="radio" name="gender" value="male"  checked={this.state.fields.gender === "male"} onChange={this.myHandler}/>Male
                        </label>
                            <label className="radio-inline">
                                <input type="radio" name="gender" value="female" checked={this.state.fields.gender === "female"} onChange={this.myHandler} />Female
                        </label>
                        <div className="errorMsg">{this.state.errors.gender}</div>
                        </div>
                        {/* <div className="hobbies-panel">
                            <div>
                                <label>Hobbies</label>
                            </div>
                            <div className="checkbox check-box">
                                <label><input type="checkbox" name="game" value={this.state.fields.hobbies["game"]} defaultChecked={this.state.fields.hobbies["game"]} onChange={this.myHandler} />Game</label>
                            </div>
                            <div className="checkbox check-box">
                                <label><input type="checkbox" name="cricket"  defaultChecked={this.state.fields.hobbies["cricket"]} onChange={this.myHandler} />Cricket</label>
                            </div>
                            <div className="checkbox check-box">
                                <label><input type="checkbox" name="music"  defaultChecked={this.state.fields.hobbies["music"]} defaultChecked={this.state.fields.hobbies["music"] === "music"} onChange={this.myHandler} />Music</label>
                            </div>
                        </div> */}


                        <div>
                            <button type="button" className="submit-btn" onClick={this.submitProfile}>Submit</button>
                        </div>

                    </div>
                </form>
                <div className="shadow"></div>
            </React.Fragment>
        )
    }
}

export default Form;