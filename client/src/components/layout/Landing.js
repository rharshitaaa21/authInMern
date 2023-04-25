import React, { Component } from "react";
import { Link } from "react-router-dom";
class Landing extends Component {
  render() {
    return (
      <div  className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Welcome to 29Kreativ</b> {"   "}
            </h4>
            <h3>To proceed further please click on <b>LOGIN</b> </h3>
          
            <h6>If you don't have account please click on <b>REGISTER</b></h6>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
               
                className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;