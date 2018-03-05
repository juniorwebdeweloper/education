import React, {Component} from 'react';
import '../css/style.css';
import '../css/media.css';
import logo from '../images/logo_react.png';

class HeaderLogo extends Component {
	render() {
		return (
			<div>
				<div className="logo">
					<a href="#"><img src={logo} alt="react" /></a>
				</div>
			</div>
			);
	}
}

export default HeaderLogo;