import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faCheckDouble, faClosedCaptioning } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import "./Style_sheet.css"
const Not = ({ traiter, cloturé, fileinfo }) => {
    var path = "/marche-form/" + fileinfo.num
    if ({ traiter }) {
        return (
            <div className="notification-container">
                <Link to={path} className="link-not">
                    <div className="row">
                        <div className="notif-info">
                            <FontAwesomeIcon icon={faEdit} className="icon" />
                            <div className="txt">Nouveau dossier à traiter </div>
                            <div className="date"> {fileinfo.date}</div>
                        </div>
                        <div className="notif-info">
                            <div className="sub-txt"> numero de dossier :{fileinfo.num}</div>
                        </div>
                    </div>

                </Link>
            </div>


        )

    }
    if ({ cloturé }) {
        return (

            <div className="notification-container">
                <Link to={path} className="link-not">
                    <div className="row">
                        <div className="notif-info">
                            <FontAwesomeIcon icon={faClosedCaptioning} className="icon" />
                            <div className="txt">Un dossier a été cloturé</div>
                            <div className="date"> {fileinfo.date}</div>
                        </div>
                        <div className="notif-info">
                            <div className="sub-txt"> numero de dossier : {fileinfo.num}</div>
                        </div>
                    </div>

                </Link>
            </div>
        );
    }
    return (

        <div className="notification-container">
            <Link to={path} className="link-not">
                <div className="row">
                    <div className="notif-info">
                        <FontAwesomeIcon icon={faCheckDouble} className="icon" />
                        <div className="txt">transmission de dossier avec succes</div>
                        <div className="date"> {fileinfo.date}</div>
                    </div>
                    <div className="notif-info">
                        <div className="sub-txt"> numero de dossier : {fileinfo.num}</div>
                    </div>
                </div>

            </Link>
        </div>


    );
}

export default Not;

