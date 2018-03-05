import React, { Component } from 'react';
import FooterMenu from './FooterMenu';
import FooterSocial from './FooterSocial';
import FooterCopy from './FooterCopy';
import '../css/style.css';
import '../css/reset.css';
import '../css/media.css';

class Footer extends Component {
	render() {
		return (
				<div className="container">
					<FooterMenu />
					<FooterSocial />
					<FooterCopy />
				</div>
			);
	}
}

export default Footer;