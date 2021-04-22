import "../../index.css"

const Card = () => {
    return (
        <div className="form-container">
            <form className="signin-form">
                <h1 className="txt">  </h1>
                <div id="email-container">
                    <legend className="emailLeg"> Email</legend>
                    <input type="text" placeholder="Email" className="email" autocomplete="off" class="focused" required/>
                </div>
                <div id="password-container">
                    <legend className="passLeg"> Password</legend>
                    <input type= "password" placeholder="Password" className="password" required/>
                </div>
                <button type="submit" className="btn-sign"> Sign Up</button>
            </form>
        </div>
        
    )
}

export default Card
