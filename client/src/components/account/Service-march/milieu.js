import './Style_sheet.css'
import React, { useState } from "react";
import Acc from "../marche/Acc.js"
import Dossier from "./Dossier.js"
const Milieu = () => {
    function addChild(){
        setNum([...Num,124])
    }
    const [Num, setNum] = useState([])
    return (
        <div className="partie-milieu">
            <h2> Bienvenue dans le service marche!</h2>
            <div className="content-marche">
                <div className="btn-contain">
                    <button className="new" onClick={addChild}>
                        <h4>Nouveau +</h4>
                    </button>
                </div>
                <div className="dossiers">
                    {
                        Num.map((n) => {
                            return <Dossier />
                        })
                    }

                </div>
            </div>

        </div>

    );

};
export default Milieu;