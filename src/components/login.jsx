import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../App.css';

class Login extends Component {
  render() {
    return (
      <div>        
        <section id="wrapper" className="login-register login-sidebar" style={{backgroundImage: 'url(http://eliteadmin.themedesigner.in/demos/bt4/assets/images/background/login-register.jpg)'}}>
        <div className="login-box card">
          <div className="card-body">
            <form className="form-horizontal form-material text-center" id="loginform" action="http://eliteadmin.themedesigner.in/demos/bt4/crm/index.html">
              <a className="db"><img src="http://eliteadmin.themedesigner.in/demos/bt4/assets/images/logo-icon.png" alt="Home" /><br /><img src="http://eliteadmin.themedesigner.in/demos/bt4/assets/images/logo-text.png" alt="Home" /></a>
              <div className="form-group m-t-40">
                <div className="col-xs-12">
                  <input className="form-control" type="text" required placeholder="Username" />
                </div>
              </div>
              <div className="form-group">
                <div className="col-xs-12">
                  <input className="form-control" type="password" required placeholder="Password" />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-12">
                  <div className="d-flex no-block align-items-center">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="customCheck1" />
                      <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div> 
                    <div className="ml-auto">
                      <a id="to-recover" className="text-muted"><i className="fas fa-lock m-r-5" /> Forgot password?</a>
                    </div>
                  </div>   
                </div>
              </div>
              <div className="form-group text-center m-t-20">
                <div className="col-xs-12">
                  <Link to="/dashboard"><button className="btn btn-info btn-lg btn-block text-uppercase btn-rounded" type="submit">Log In</button></Link>
                </div>
              </div>
              
              <div className="form-group m-b-0">
                <div className="col-sm-12 text-center">
                  Don't have an account?  <Link to="/signup" className="text-primary m-l-5"><b>Sign Up</b></Link>
                </div>
              </div>
            </form>
            <form className="form-horizontal" id="recoverform" action="http://eliteadmin.themedesigner.in/demos/bt4/crm/index.html">
              <div className="form-group ">
                <div className="col-xs-12">
                  <h3>Recover Password</h3>
                  <p className="text-muted">Enter your Email and instructions will be sent to you! </p>
                </div>
              </div>
              <div className="form-group ">
                <div className="col-xs-12">
                  <input className="form-control" type="text" required placeholder="Email" />
                </div>
              </div>
              <div className="form-group text-center m-t-20">
                <div className="col-xs-12">
                  <button className="btn btn-primary btn-lg btn-block text-uppercase waves-effect waves-light" type="submit">Reset</button>
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

export default Login;
