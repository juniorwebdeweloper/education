import React, { Component } from 'react';
import firebase from '../fire';
import '../css/style.css';
import '../css/media.css';
import man from '../images/man.png';

class MainRegister extends Component {
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
};
	render() {
		return (
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
				);
	}
}

export default MainRegister;