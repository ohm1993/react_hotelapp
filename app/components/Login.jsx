var React = require('react');
var { Button, FormGroup, FormControl, ControlLabel } = require('react-bootstrap');

var Login = React.createClass({
  getInitialState: function () {
    return {
      email: "",
      password: ""
    }
  },
  handleSubmit: function (e) {
    e.preventDefault();
    var username  = this.refs.username.value;
    var password = this.refs.password.value;
    if(username != null && username != '' && password != null && password != ''){
      if(username == "admin" && password == "admin12#$"){
         console.log("redirect to hotel page");
      }else{
        alert("username or password incorrect");
      }
    }else{
    alert("username and password both are required");
    }
  },
  render: function () {
    return (
        <div className="Login">
        <form onSubmit={this.handleSubmit}>
           <ControlLabel>Email</ControlLabel>
           <input type="text" ref="username"/>
           <ControlLabel>Password</ControlLabel>
           <input type="password" ref="password"/>
          <button  bsSize="small" className="button">Login</button>
        </form>
      </div>
    );
  }
});

module.exports = Login;
