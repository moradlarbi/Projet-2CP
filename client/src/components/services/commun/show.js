import './Style_sheet.css'
import Not from "./notification.js"
const Show = ({ traiter, cloturé, fileinfo }) => {

    return (
        <div className="notification-list">
            <div class="section">
                <a href="" class="profContsec" >
                    <div className="profConttxt">
                        <Not traiter={traiter} cloturé={cloturé} fileinfo={fileinfo} />
                    </div>
                </a>
            </div>
        </div>
    );

};
export default Show;