import React, { Component } from 'react';
import HeaderLogo from './HeaderLogo';
import HeaderMenu from './HeaderMenu';
import HeaderLogInOut from './HeaderLogInOut';
import '../css/style.css';
import '../css/media.css';
import logo from '../images/logo_react.png';

class Header extends Component {
  render() {
    return (
      <div className="container clearfix">
				<HeaderLogo />
				<div className="head-cont">
					<HeaderMenu />
					<HeaderLogInOut />
				</div>
			</div>
    );
  }
}

export default Header;
