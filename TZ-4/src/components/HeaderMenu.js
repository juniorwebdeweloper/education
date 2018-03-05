import React, {Component} from 'react';
import '../css/style.css';
import '../css/media.css';

class HeaderMenu extends Component {
	render() {
		return (
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
			);
	}
}

export default HeaderMenu;