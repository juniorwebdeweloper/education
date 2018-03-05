import React, { Component } from 'react';
import firebase from '../fire';
import MainRegister from './MainRegister';
import '../css/style.css';
import '../css/media.css';
import html from '../images/html.png';
import css from '../images/css.png';
import js from '../images/js.png';

class Main extends Component {
	constructor(props) {
			super(props);
			this.state = {
				isBurgerOpen: false
			};
			this.handleClick = this.handleClick.bind(this);
		}

		handleClick() {
			this.setState(prevState => ({
				isBurgerOpen: !prevState.isBurgerOpen
			}));
		}

		changeFont = () => {
			if (this.textInput.value >= 8 && this.textInput.value <= 24 &&  Number.isInteger(parseFloat(this.textInput.value))) {
			this.content.style.fontSize = `${this.textInput.value}px`;
		} else {
			alert('Please write integer number from 8px to 24px!');
		}
		}

		holdTheDoor = () => {
			console.log(this.hodor.value);
			document.body.style.backgroundImage = 'none';
			document.body.style.backgroundColor = `${this.hodor.value}`;
		}

		fontChange = (item) => {
			this.content.style.fontFamily = item;
			console.log(item);
		}

		deleteParagraph = () => { 
			const pElements = document.getElementsByTagName('p');
			if (pElements.length > 0) {
				pElements[pElements.length - 1].remove();
			}
			console.log(pElements.length);
		}
	render () {
		const FONTS = ['Roboto', 'Nautilus Pompilius', 'Beer money'];
		return (
			<div className="container">
					<aside className="sidebar">
						<ul className="sidebar-list">
							<li><a href="">HTML5</a></li>
							<li><a href="">CSS3</a></li>
							<li><a href="">Javascript</a></li>
							<li><a href="">React.js</a></li>
							<li><a href="">Vue.js</a></li>
							<li><a href="">Angular</a></li>
						</ul>
							<div id="cPanel">
						<button id="burger" onClick={this.handleClick}>
							<span className={this.state.isBurgerOpen ? 'active-btn' : ''}></span>
							<span className={this.state.isBurgerOpen ? 'active-btn' : ''}></span>
							<span className={this.state.isBurgerOpen ? 'active-btn' : ''}></span>
						</button>
						<h3 className="h3-cp">Control panel</h3>
						<div id="cPcont" className={this.state.isBurgerOpen ? 'active' : ''}>
							<h3 className="h3-mb">Font size changer</h3>
							<input 
								type="text" 
								className="font-change" 
								placeholder="From 8px to 24px" 
								ref={(input) => { this.textInput = input; }} 
							/>
							<input 
								type="submit" 
								className="change" 
								value="Change" id="ch1" 
								onClick={this.changeFont}
							/>
							<hr />
							<h3 className="h3-mb">Bg-Color changer</h3>
							<input 
								type="color" 
								className="color-input" 
								ref={(hodor) => this.hodor = hodor}
							/>
							<input 
								type="submit" 
								className="change" 
								value="Change" id="ch2" 
								onClick={this.holdTheDoor}
							/>
							<hr />
							<form>
							<h3 className="h3-mb">Font changer</h3>
							{FONTS.map((item, index) => {
								return (
								<label 
									key={index}
									className="radio" 
									onClick={() => this.fontChange(item)}>
								<input 
									name="font" 
									type="radio" 
									value="Roboto" 
									className="r_button" 
								/>
								<div className="radio-text">{item}</div>
							</label>
							)
							})}
							</form>
							<hr />
							<h3 className="h3-mb">Delete last paragraph</h3>
							<input 
								type="submit" 
								value="Delete &#60;p&#62;" 
								className="delete" 
								id="del" 
								onClick={this.deleteParagraph}
							/>
						</div>
					</div>
					</aside>
					<section className="content clearfix" ref={(content) => this.content = content}>
					<div className="cont-item">
						<div className="wrap-img"><img src={html} alt="html5" /></div>
						<p>HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and current major version of the HTML standard.</p>
							<p>It was published in October 2014 by the World Wide Web Consortium (W3C)to improve the language with support for the latest multimedia, while keeping it both easily readable by humans and consistently understood by computers and devices such as web browsers, parsers, etc. HTML5 is intended to subsume not only HTML 4, but also XHTML 1 and DOM Level 2</p>
							<p>HTML5 includes detailed processing models to encourage more interoperable implementations; it extends, improves and rationalizes the markup available for documents, and introduces markup and application programming interfaces (APIs) for complex web applications. For the same reasons, HTML5 is also a candidate for cross-platform mobile applications, because it includes features designed with low-powered devices in mind.</p>
						</div>
						<div className="cont-item">
							<div className="wrap-img"><img src={css} alt="css" /></div>
							<p>Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language. Although most often used to set the visual style of web pages and user interfaces written in HTML and XHTML, the language can be applied to any XML document, including plain XML, SVG and XUL, and is applicable to rendering in speech, or on other media. Along with HTML and JavaScript, CSS is a cornerstone technology used by most websites to create visually engaging webpages, user interfaces for web applications, and user interfaces for many mobile applications.</p>
							<p>CSS is designed primarily to enable the separation of presentation and content, including aspects such as the layout, colors, and fonts. This separation can improve content accessibility, provide more flexibility and control in the specification of presentation characteristics, enable multiple HTML pages to share formatting by specifying the relevant CSS in a separate .css file, and reduce complexity and repetition in the structural content.</p>
						</div>
						<div className="cont-item">
							<div className="wrap-img"><img src={js} alt="javascript" /></div>
							<p>JavaScript (<em>/ˈdʒɑːvəˌskrɪpt/</em>), often abbreviated as JS, is a high-level, dynamic, weakly typed, prototype-based, multi-paradigm, and interpreted programming language. Alongside HTML and CSS, JavaScript is one of the three core technologies of World Wide Web content production. It is used to make webpages interactive and provide online programs, including video games. The majority of websites employ it, and all modern web browsers support it without the need for plug-ins by means of a built-in JavaScript engine. Each of the many JavaScript engines represent a different implementation of JavaScript, all based on the ECMAScript specification, with some engines not supporting the spec fully, and with many engines supporting additional features beyond ECMA.</p>
							<p>As a multi-paradigm language, JavaScript supports event-driven, functional, and imperative (including object-oriented and prototype-based) programming styles.</p>
						</div>
					</section>
							<MainRegister />
				</div>
			);
	}
}

export default Main;