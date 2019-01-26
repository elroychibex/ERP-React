import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../App.css';

class Signup extends Component {
    render() {
      return (
       <div>
           <section id="wrapper" className="login-register login-sidebar" style={{backgroundImage: 'url(http://eliteadmin.themedesigner.in/demos/bt4/assets/images/background/login-register.jpg)'}}>
        <div className="login-box card">
          <div className="card-body">
            <form className="form-horizontal form-material" id="loginform" action="http://eliteadmin.themedesigner.in/demos/bt4/crm/index.html">
              <div className="text-center">
                <a className="db"><img src="http://eliteadmin.themedesigner.in/demos/bt4/assets/images/logo-icon.png" alt="Home" /><br /><img src="http://eliteadmin.themedesigner.in/demos/bt4/assets/images/logo-text.png" alt="Home" /></a>
              </div>
              <h3 className="box-title m-t-40 m-b-0">Register Now</h3><small>Create your account and enjoy</small>
              <div className="form-group m-t-20">
                <div className="col-xs-12">
                  <input className="form-control" type="text" required placeholder="Name" />
                </div>
              </div>
              <div className="form-group ">
                <div className="col-xs-12">
                  <input className="form-control" type="text" required placeholder="Email" />
                </div>
              </div>
              <div className="form-group ">
                <div className="col-xs-12">
                  <input className="form-control" type="password" required placeholder="Password" />
                </div>
              </div>
              <div className="form-group">
                <div className="col-xs-12">
                  <input className="form-control" type="password" required placeholder="Confirm Password" />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-12">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">I agree to all <a href="javascript:void(0)">Terms</a></label> 
                  </div> 
                </div>
              </div>
              <div className="form-group text-center m-t-20">
                <div className="col-xs-12">
                  <button className="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light" type="submit">Sign Up</button>
                </div>
              </div>
              <div className="form-group m-b-0">
                <div className="col-sm-12 text-center">
                <span>Already have an account?</span> <Link to="/" className="text-info m-l-5"><b>Sign In</b></Link> 
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
       </div>
   );
}
  }
  
  export default Signup;