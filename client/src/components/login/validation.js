export default function validateInfo(values) {
    let errors = {};
    
    if (!values.email) {
      errors.email = 'Email requit';
    } 
    if (!values.password) {
      errors.password = 'Mot de passe requit';
    } 
    return errors;
  }