import React from 'react';
import logo from '../logo.svg';
import UploadedFile from "./uploadedFile";
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      occupation: 'Businessman',
      gender: 'male',
      textArea: '',

    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleOccupation = this.handleOccupation.bind(this);
    this.handleComment = this.handleComment.bind(this);
    this.handleGender = this.handleGender.bind(this);
  }

  handleNameChange(e) {
    this.setState({ userName: e.target.value });
  }

  handleOccupation(e) {
    this.setState({ occupation: e.target.value });
  }

  handleComment(e) {
    this.setState({ textArea: e.target.value });
  }

  handleGender(e) {
    this.setState({ gender: e.target.value })
  }

  render() {
    return (
      <div>
        <div className="text-center">
          <img length="200px" height="200px" src={logo} /><br />
          <h1>This is Practical Test Application.</h1>
        </div><br />

        <form action="/handleSubmit" method="post" className="form-group">
          <div className="row">
            <label htmlFor="userName" className="col-sm-1 col-form-label ml-3">Name:</label>
            <input type="text" id="userName" name="userName" onChange={this.handleNameChange} className="form-control col-sm-4 ml-4" placeholder="Enter Your name" value={this.state.userName} /><br />
          </div>
          <div className="row">
            <label className="col-sm-1 col-form-label" htmlFor="occupation">Occupation:</label>
            <select value={this.state.occupation} onChange={this.handleOccupation} className="form-control col-sm-3 ml-5" id="occupation">
              <option>Businessman </option>
              <option>Farmer</option>
              <option>Teacher</option>
              <option>Broker</option>
              <option>Developer</option>
            </select><br />
          </div>
          <label className="col-sm-1 mt-3" htmlFor="gender">Gender:</label>

          <div className="form-check form-check-inline ml-4  ">
            <input checked={this.state.gender === "male"} onChange={this.handleGender} className="form-check-input" type="radio" id="male" name="gender" value="male"></input>
            <label className="form-check-label" htmlFor="male">Male</label>
          </div>
          <div className="form-check form-check-inline">
            <input checked={this.state.gender === "female"} onChange={this.handleGender} className="form-check-input" type="radio" id="female" name="gender" value="female"></input>
            <label className="form-check-label" htmlFor="female">Female</label>
          </div>
          <div className="form-check form-check-inline">
            <input checked={this.state.gender === "other"} onChange={this.handleGender} className="form-check-input" type="radio" id="another" name="gender" value="another"></input>
            <label className="form-check-label" htmlFor="another">Another</label>
          </div>
          <br />

          <label className="col-sm-1" htmlFor="comment">Comment:</label>
          <textarea className="ml-5 mt-3" onChange={this.handleComment} value={this.state.textArea} id="comment" name="comment" rows="5" cols="50"></textarea><br />

          <button className="btn btn-primary ml-3" type="submit">submit</button>
        </form>
        <UploadedFile />
      </div>
    );
  }
}

export default App;
