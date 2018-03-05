import React, {Component} from 'react';
import firebase from '../fire';
import '../css/style.css';
import '../css/media.css';

class HeaderLogInOut extends Component {
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
	render() {
		return (
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
			);
	}
}

export default HeaderLogInOut;