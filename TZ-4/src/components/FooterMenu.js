import React, { Component } from 'react';
import '../css/style.css';
import '../css/reset.css';
import '../css/media.css';

class FooterMenu extends Component {
	render() {
		return (
				<nav>
						<div className="footer-menu">
							<ul className="bottom-menu">
								<li><a href="">Home</a></li>
								<li><a href="">Info</a></li>
								<li><a href="">About us</a></li>
								<li><a href="">Contacts</a></li>
							</ul>
						</div>
					</nav>
			);
	}
}

export default FooterMenu;