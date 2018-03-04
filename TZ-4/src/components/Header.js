import React, { Component } from 'react';
import '../css/style.css';
import '../css/reset.css';
import '../css/media.css';
import logo from '../images/logo_react.png';

class Header extends Component {
  render() {
    return (
      <div className="container clearfix">
				<div className="logo">
					<a href="#"><img src={logo} alt="react" /></a>
				</div>
				<div className="head-cont">
					<nav>
						<div className="head-menu">
							<ul className="main-menu">
								<li><a href="">Home</a></li>
								<li><a href="">About us</a></li>
								<li><a href="">Info</a></li>
								<li><a href="">Contacts</a></li>
							</ul>
						</div>
					</nav>
					<div className="login-form">
						<div className="welcome-text">
							<span className="user-name"></span>
							<button className="sbm-input" id="btnLogout" type="button">Log Out</button>
						</div>
						<form name="login" action="#" id="login">
							<div className="log">
								<input className="text-input" id="auth_login" type="text" placeholder="email" required/>
							</div>
							<div className="log">
								<input className="password-input" id="auth_password" type="password" placeholder="password" required/>
							</div>
							<div className="sbm">
								<input className="sbm-input" id="auth" type="submit" value="Login"/>
							</div>
					</form>
				</div>
			</div>
			</div>
    );
  }
}

export default Header;
