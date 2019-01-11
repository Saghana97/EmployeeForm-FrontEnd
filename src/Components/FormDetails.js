import React from "react";
import "./FormDetails.css";
import axios from 'axios';

class FormDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        ename: "",
        emp_no: "",
        phone: "",
        salary: "",
        exp: "",
        docs: {
          aadhar: "",
          cert_10: "",
          cert_12: "",
          Degree: ""
        }
      }
    };
  }
  handleChange = name => e => {
    const data = this.state.data;
   data[e.target.name]  = e.target.value;

   this.setState({data})

    //console.log(this.state.data[name]);
    //console.log("ghhgh",this.state.data);
    
  };

  submitHandle = () => {
    // console.log(this.state.data.docs.aadhar);
    // console.log(this.state.data.docs.Degree);
    // console.log(this.state.data.docs.cert_10);
    // console.log(this.state.data.docs.cert_12);
    //console.log(this.state.data.ename);
    if((this.state.data.ename.length == 0) || (this.state.data.emp_no.length == 0)|| (this.state.data.phone.length == 0) || (this.state.data.salary.length == 0) || (this.state.data.exp.length == 0) || (this.state.data.docs.aadhar.length == 0) || (this.state.data.docs.cert_10.length == 0) || (this.state.data.docs.cert_12.length == 0) || (this.state.data.docs.Degree.length == 0)){
      alert("Missing fields");
    }else{
    const user ={
      data : this.state.data
    }
    console.log("dataaaaa",user);
    axios.post(`http://localhost:5000/save`, {user})
      .then(res => {
        //console.log(res);
        console.log(res.data);
        var jsonString = JSON.stringify(res.data);
        jsonString = jsonString.replace(/[{}]/g, '');
        console.log(jsonString);
        alert(jsonString);
      })
    }
  };

  getFile = name => e => {
    const file = e.target.files;
    let data = { ...this.state };
    let locfile = null;
    let self = this;
    if (file.length > 0) {
      let fileReader = new FileReader();
      fileReader.onload = function(fileLoadedEvent) {
        locfile = fileLoadedEvent.target.result;
        data.data.docs[name] = locfile;
        self.setState({
          data: data.data
        });
      };
      fileReader.readAsDataURL(file[0]);
    }
  };
  render() {
    return (
      <div className="outer-wrapper">
        <div className="form">
          <div className="element">
            <span className="left">Name:</span>
            <input
              type="text"
              className="input"
              name="ename"
              value={this.state.ename}
              onChange={this.handleChange("ename")}
            />
          </div>
          <div className="element">
            <span className="left">Employee Number:</span>
            <span className="right">
              <input
                type="number"
                className="input"
                name="emp_no"
                value={this.state.emp_no}
                onChange={this.handleChange("emp_no")}
              />
            </span>
          </div>
          <div className="element">
            <span className="left">Phone Number : </span>
            <span className="right">
              <input
                type="text"
                className="input"
                name="phone"
                value={this.state.phone}
                onChange={this.handleChange("phone")}
              />
            </span>
          </div>
          <div className="element">
            <span className="left">salary : </span>
            <span className="right">
              <input
                type="text"
                className="input"
                name="salary"
                value={this.state.salary}
                onChange={this.handleChange("salary")}
              />
            </span>
          </div>
          <div className="element">
            <span className="left">Experience: </span>
            <span className="right">
              <input
                type="text"
                className="input"
                name="exp"
                value={this.state.exp}
                onChange={this.handleChange("exp")}
              />
            </span>
          </div>
          <div className="element">
            <span className="left"> Aadhar:</span>
            <span className="right">
              <input
                type="file"
                accept="application/msword,text/plain, application/pdf"
                className="input"
                name="aadhar"
                onChange={this.getFile("aadhar")}
              />
            </span>
          </div>
          <div className="element">
            <span className="left"> Degree:</span>
            <span className="right">
              <input
                type="file"
                accept="application/msword,text/plain, application/pdf"
                className="input"
                name="Degree"
                onChange={this.getFile("Degree")}
              />
            </span>
          </div>
          <div className="element">
            <span className="left"> 10th:</span>
            <span className="right">
              <input
                type="file"
                accept="application/msword,text/plain, application/pdf"
                className="input"
                name="cert_10"
                onChange={this.getFile("cert_10")}
              />
            </span>
          </div>
          <div className="element">
            <span className="left"> 12th:</span>
            <span className="right">
              <input
                type="file"
                accept="application/msword,text/plain, application/pdf"
                className="input"
                name="cert_12"
                onChange={this.getFile("cert_12")}
              />
            </span>
          </div>
          <div className="button" onClick={this.submitHandle}>
            Submit
          </div>
        </div>
      </div>
    );
  }
}
export default FormDetails;