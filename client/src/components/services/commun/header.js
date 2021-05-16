import './Style_sheet.css'
import logoimg from "../../../images/folder-images-main/lo.svg"
import prfp from "../../../images/folder-images-main/imagefille.jpg"
import Notif from "./not-num.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faEject, faSortUp } from '@fortawesome/free-solid-svg-icons'
import Pmenu from "./profile-menu"
import Show from "./show.js"
import React, { useState, useEffect } from "react";
import { useRef } from 'react'
let useClickOutside = (handler1) => {
    let menuref = useRef();
    useEffect(() => {
        let handler = (event) => {
            if (!menuref.current.contains(event.target)) {
                handler1();
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });
    return menuref;
}
const Head = ({ userInfo, serviceinfo }) => {
    const [divcontainer, setdivcontainer] = useState(false);
    const [divcontaineravatar, setdivcontaineravatar] = useState(false);
    const fileinfo = {
        num: '13',
        date: '13-5'
    };
    let menuref = useClickOutside(() => {
        setdivcontainer(false);
        setdivcontaineravatar(false);
    }
    )
    return (
        <header className="head-mon-serv">

            <nav className="nav-container-mon-serv">
                <div className="logo-container">
                    <a>
                        <img src={logoimg} height="40" className="lg" />
                    </a>
                </div>

                <ul className="navbar1 navbar">
                    <li className={serviceinfo.x1}>
                        <a href={serviceinfo.link1}>Mon service</a>
                    </li>
                    <li className={serviceinfo.x2}>
                        <a href={serviceinfo.link2}>Archive</a>
                    </li>
                    <li className={serviceinfo.x3}>
                        <a href={serviceinfo.link3}>Statistiques</a>
                    </li>
                    <li className={serviceinfo.x4}>
                        <a href={serviceinfo.link4}>Dossier en cours</a>
                    </li>
                </ul>
                <ul className="navbar2 navbar">

                    <li className="nav-el2 nav-el" >
                        <a className="element" onClick={() => setdivcontainer(curentdivcontainer => !curentdivcontainer)}>
                            <span className="bell" > <FontAwesomeIcon icon={faBell} className="icon" /></span>
                            <span className="number"><Notif /></span>
                        </a>

                    </li>
                    <li className="nav-el3 nav-el" >
                        <a className="elementP" onClick={() => setdivcontaineravatar(avatar => !avatar)}>
                            <img src={prfp} className="avatar" />
                        </a>
                    </li>
                </ul>

            </nav>
            <div ref={menuref}>
                {
                    divcontainer && (
                        <div className="not-tab">
                            <div className="tete" >
                                <a href=" " className="notification">Notification</a>
                                <div className="fermer" onClick={() => setdivcontainer(curentdivcontainer => !curentdivcontainer)}>
                                    <FontAwesomeIcon icon={faEject} className="icon" />
                                </div>
                            </div>
                            <div>
                                <Show traiter="true" cloturé="false" fileinfo={fileinfo} />
                                <Show traiter="false" cloturé="true" fileinfo={fileinfo} />
                                <Show traiter="false" cloturé="false" fileinfo={fileinfo} />
                            </div>
                        </div>)
                }
                {
                    divcontaineravatar && (<div><Pmenu userInfo={userInfo} /></div>)
                }
            </div>
        </header >

    )
}
export default Head;