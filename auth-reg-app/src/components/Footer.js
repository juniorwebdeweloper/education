import React, { Component } from 'react';
import '../css/style.css';
import '../css/reset.css';
import '../css/media.css';
import fb from '../images/social_fb.png';
import tw from '../images/social_tw.png';
import ln from '../images/social_in.png';

class Footer extends Component {
	render() {
		return (
				<div className="container">
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
					<div className="share">
						<a className="social social-fb" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><img src={fb} alt="facebook" /></a>
						<a className="social social-tw" href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><img src={tw} alt="twitter" /></a>
						<a className="social social-in" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><img src={ln} alt="linkedin" /></a>
					</div>
					<div className="copyright">
						&copy; Zozulia Kirill - 2018
					</div>
				</div>
			);
	}
}

export default Footer;