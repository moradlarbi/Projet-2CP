import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../index.css'
import logoimg from "../../images/lo.svg"
import useForm from './useForm'
import usePassword from './usePassword'
import { faSignInAlt, faUser, faEnvelope, faLock, faUserTag, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
library.add(fab)
const Card = ( {submitForm} ) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm
      );
      const [PassInputType, ToggleIcon] = usePassword();
    return (
        <div className="login-container">
            <div className="left-contain">
                <div className="sign-contain">
                    <div className="icons">
                        <h1> Se connecter</h1>
                        <div className="logos">
                            <div className="fa-google f">
                                <FontAwesomeIcon icon={['fab', 'google']} />
                            </div>
                            <div className="fa-linkedin f">
                                <FontAwesomeIcon icon={['fab', 'linkedin']} />
                            </div>
                            <div className="fa-facebook f">
                                <FontAwesomeIcon icon={['fab', 'facebook']} />
                            </div>

                            
                        </div>
                       
                        <p>Si vous n'avez pas encore de compte</p>
                    </div>
                    <form onSubmit={handleSubmit} className="signup-form" noValidate>
                        <div className="cont email-container">
                            <div className=" contain">
                                <FontAwesomeIcon icon={faEnvelope} className="icn" />
                                <input 
                                    type="email" 
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    placeholder="Email" 
                                    className="email" 
                                    autocomplete="off" required/>
                                
                            </div>
                            
                        </div>
                        <div className="cont password-container">
                            <div className="contain">
                                <FontAwesomeIcon icon={faLock} className="icn" />                            
                                <input 
                                    type= {PassInputType}
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    placeholder="Password" 
                                    className="password" required/>
                                {ToggleIcon}
                                
                            </div>
                        </div>
                        
                        
                        <div className="btn-login">
                            <button type="submit" className="btn-sign"> Se connecter <FontAwesomeIcon icon={faSignInAlt} /> </button>
                        </div>
                       
                    </form>
                </div>

            </div>
            <div className="right-contain">
                <div className="card-txt">
                    <h1>Bienvenue !</h1>
                    <p>
                        pour rester en contact avec<br/>
                        nous, veuillez vous connecter<br/>
                        avec vos informations<br/>
                        personnelles.
                    </p>
                    
                    <button className="btn-signin">
                        <a href="/signup">
                            Creer un compte <FontAwesomeIcon icon={faSignInAlt} className="fasign" />
                        </a>
                    </button>
                </div>
            </div>
        </div>
        
    )
}

export default Card
