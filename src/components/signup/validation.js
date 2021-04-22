export default function validateInfo(values) {
    let errors = {};
    let err = false;
    if (!values.username.trim()) {
      errors.username = 'Nom requit';
      err = true;
    }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
    if (!values.userprenom.trim()) {
        errors.userprenom = 'prenom requit';
        err = true;
      }
  
    if (!values.email) {
      errors.email = 'Email requit';
      err = true;
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email invalid';
      err = true;
    }
    if (!values.password) {
      errors.password = 'Mot de passe requit';
      err = true;
    } else if (values.password.length < 8) {
      errors.password = 'Mot de passe doit contenir au moins 8 caracteres';
      err = true;
    }
  
    if (!values.password2) {
      errors.password2 = 'Mot de passe requit';
      err = true;
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Mot de passe incorrect';
      err = true;
    }
    
    return errors;
  }