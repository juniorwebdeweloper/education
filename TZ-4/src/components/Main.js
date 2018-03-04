import React, { Component } from 'react';
//import fire from '../fire';
import '../css/style.css';
//import '../css/reset.css';
import '../css/media.css';
import logo from '../images/logo_react.png';
import html from '../images/html.png';
import css from '../images/css.png';
import js from '../images/js.png';
import man from '../images/man.png';

import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyCVesHby-X11H6ZDq3AdpBcUTGqUZo9FY4",
    authDomain: "testforweb-4142a.firebaseapp.com",
    databaseURL: "https://testforweb-4142a.firebaseio.com",
    projectId: "testforweb-4142a",
    storageBucket: "testforweb-4142a.appspot.com",
    messagingSenderId: "6543032742"
  };
  firebase.initializeApp(config);

class Main extends Component {

// firebase 
function = () => {
  const errors = document.querySelector('#errors');
  const failed = { fail: false, errors: [] };
  const userName = document.querySelector('.user-name');
  const controlPanel = document.querySelector('#cPanel');
  const loginForm = document.querySelector('#login');
  const regForm = document.querySelector('.reg-form');
  const welcomeText = document.querySelector('.welcome-text');
  const contentItems = document.querySelector('.content');

  initSession();
  handleFormRegistration();
  handleFormLogin();
  logOut();

  function changeForm(form) {
    form.addEventListener('change', () => {
      errors.innerHTML = "";
      failed.fail = false;
      failed.errors = [];
    });
  }

  function initSession() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        userName.textContent = 'Welcome, ' + user.displayName;
        controlPanel.style.display = 'block';
        loginForm.style.display = 'none';
        welcomeText.style.display = 'block';
        regForm.remove();
        contentItems.style.width = '80%';
        contentItems.style.float = 'right';
      }
    });
  }

  function createUser(email, password, name) {
   firebase
   .auth()
   .createUserWithEmailAndPassword(email, password)
   .then(user => {
    console.log(user);
    user
    .updateProfile({
      displayName: name
    })
    .then(() => initSession());
  })
   .catch(err => {
    errors.innerHTML = err.message;
  });
 }

 function handleFormRegistration() {
  const form = document.forms.register;

  changeForm(form);

  form.addEventListener('submit', event => {
    event.preventDefault();

    const { elements } = event.target;

    const name = elements[0].value.trim(); 
    const email = elements[1].value.trim(); 
    const password = elements[2].value.trim(); 
    const repeatPassword = elements[3].value.trim(); 

    if (password !== repeatPassword) {
      failed.fail = true;
      failed.errors.push('Passwords do not match!');
    }

    if (name.length === 0) {
      failed.fail = true;
      failed.errors.push('Enter login');
    }

    if (!failed.fail) {
      createUser(email, password, name);

      elements[0].value = '';
      elements[1].value = '';
      elements[2].value = '';
      elements[3].value = '';
    } else {
      let stringErrors = '';
      for (let error of failed.errors) {
        stringErrors += error + '<br>';
      }
      errors.innerHTML = stringErrors;
    }
  });
}

function handleFormLogin() {
  const formLogin = document.forms.login;
  formLogin.addEventListener('submit', event => {
    event.preventDefault();
    const email = event.target.elements[0].value;
    const password = event.target.elements[1].value;

    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      initSession();
      event.target.elements[0].value = '';
      event.target.elrements[1].value = '';
    })
      .catch(err => {
      errors.innerHTML = err.message;
      console.log(err);
    });
  });
}

function logOut() {
  const btnLogout = document.querySelector('#btnLogout');
  btnLogout.addEventListener('click', () => {
    firebase
    .auth()
    .signOut()
    .catch(err => {
      console.log(err);
    });
    window.location.reload();
  });
}
};

		constructor(props) {
			super(props);
			this.state = {
				isBurgerOpen: false
				// selectedOption: 'Roboto'
				// option: 'Beer money'
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

		deleteParagraph = () => { 
			const pElements = document.getElementsByTagName('p');
			if (pElements.length > 1) {
				pElements[pElements.length - 2].remove();
			}
			console.log(pElements.length);
		}

		// handleRadioChange(event) {
		// 	this.setState({
		// 		option: event.target.value
		// 	});
		// 	console.log('Your choise is ' + this.state.option)
		// }
		// getInitialState = () => {

		// 		this.setState({selectedOption: 'Roboto'});

		// }

		// handleOptionCnahge = (changeEvent) => {
		// 	this.setState({
		// 		selectedOption: changeEvent.target.value
		// 	});
		// 	console.log(changeEvent.target.value );
		// }

		// handleFormSubmit = (formSubmitEvent) => {
		// 	formSubmitEvent.preventDefault();

		// 	console.log('You have selected:', this.state.selectedOption);
		// }

		// changeFontFamily = (e) => {
			
		// 	var changeFF = document.getElementById('ch3');
		// 	var radioFont = document.querySelectorAll('.r_button');
		// 	for (var i = 0; i < radioFont.length; i++) {
		// 			radioFont[i].onChange = () => this.changeFontFamily(); 
		// 			};
		// 	var currentValue = this.event.target;
		// 	changeFF.onClick = function() {
		// 		for (var i = 0; i < radioFont.length; i++) {
		// 			if (currentValue === radioFont[i]) {
		// 				document.querySelector('.content').style.fontFamily = FONTS[i];
		// 				console.log(document.body.style.fontFamily);
		// 			}
		// 		}
		// 	}
		// }

		fontChange = (item) => {
			this.content.style.fontFamily = item;
			console.log(item);
		}

	render () {
		const FONTS = ['Roboto', 'Nautilus Pompilius', 'Beer money'];
		return (
			<div className="kostil">
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
							<button 
								className="sbm-input" 
								id="btnLogout" 
								type="button" 
								onClick={this.function}>
								Log Out
							</button>
						</div>
						<form name="login" action="#" id="login">
							<div className="log">
								<input 
									className="text-input" 
									id="auth_login" 
									type="text" 
									placeholder="email" 
									required
								/>
							</div>
							<div className="log">
								<input 
									className="password-input" 
									id="auth_password" 
									type="password" 
									placeholder="password" 
									required
								/>
							</div>
							<div className="sbm">
								<input 
									className="sbm-input" 
									id="auth" 
									type="submit" 
									value="Login" 
									onClick={this.function}
								/>
							</div>
					</form>
				</div>
			</div>
			</div>
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
					<div className="reg-form">
						<img src={man} alt="man" />
						<form action="#" name="register">
							<div className="text-input">
								<input type="text" name="username" id="register_login" placeholder="Enter login" required />
							</div>
							<div className="text-input">
								<input type="text" name="email" placeholder="Enter email" required />
							</div>
							<div className="text-input">
								<input type="password" name="password" id="register_password" placeholder="Enter password" required />
							</div>
							<div className="text-input">
								<input type="password" name="password" id="register_confirmation" placeholder="Repeat password" required />
							</div>
							<div className="error">
								<p id="errors"></p>
							</div>
							<input className="sbm-input" type="submit" name="submit" id="register" value="REGISTER" onClick={this.function}/><br />
							<a href="#">Restore password</a>
						</form>
					</div>
				</div>
				</div>
			);
	}
}

export default Main;