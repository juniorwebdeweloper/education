// firebase 
(function() {
  const errors = document.querySelector("#errors");
  const failed = { fail: false, errors: [] };
  const userName = document.querySelector(".user-name");
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
    form.addEventListener("change", () => {
      errors.innerHTML = "";
      failed.fail = false;
      failed.errors = [];
    });
  }

  function initSession() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        userName.textContent = "Hello, " + user.displayName;
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

    form.addEventListener("submit", event => {
      event.preventDefault();

      const { elements } = event.target;

      const name = elements[0].value.trim(); 
      const email = elements[1].value.trim(); 
      const password = elements[2].value.trim(); 
      const repeatPassword = elements[3].value.trim(); 

      if (password !== repeatPassword) {
        failed.fail = true;
        failed.errors.push("Passwords do not match!");
      }

      if (name.length === 0) {
        failed.fail = true;
        failed.errors.push("Enter login");
      }

      if (!failed.fail) {
        createUser(email, password, name);

        elements[0].value = "";
        elements[1].value = "";
        elements[2].value = "";
        elements[3].value = "";
      } else {
        let stringErrors = "";
        for (let error of failed.errors) {
          stringErrors += error + "<br>";
        }
        errors.innerHTML = stringErrors;
      }
    });
  }

  function handleFormLogin() {
    const formLogin = document.forms.login;
    formLogin.addEventListener("submit", event => {
      event.preventDefault();
      const email = event.target.elements[0].value;
      const password = event.target.elements[1].value;

      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
          initSession();
          event.target.elements[0].value = '';
          event.target.elements[1].value = '';
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
    });
  }
})();
