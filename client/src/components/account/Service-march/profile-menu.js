import './Style_sheet.css'
import prfp from "../../../images/folder-images-main/imagefille.jpg"
const Pmenu = ({userInfo}) => {

    return (
        <div className="profilemenu">
            <div className="profile">
                <img src={prfp} className="avatar" />
                <p className="userinfo">
                    <h3> {userInfo.nom} </h3>
                    <h5> {userInfo.email} </h5>
                </p>
            </div>
            <nav className="links">
                <ul className="navelement">
                    <li>
                        <a href="#" className="compte">Mon compte </a>
                    </li>
                </ul>
                <ul className="navelement">
                    <li>
                        <a href="#" className="dossier">Mes dossiers </a>
                    </li>
                </ul>
                <ul className="navelement">
                    <li>
                        <a href="#" className="historique">Mon historique </a>
                    </li>
                </ul>
                <ul className="actif">
                    <li >
                        <a href="#" className="service">Mon service</a>
                    </li>
                </ul>
                <ul className="navelement">
                    <li>
                        <a href="#" className="archive">Mon archive</a>
                    </li>
                </ul>
                <ul className="navelement">
                    <li>
                        <a href="#" className="deconnecter">Déconnecter </a>
                    </li>
                </ul>
            </nav>

        </div>
    );

};
export default Pmenu;