import Head from "./header.js"
import Droite from "./droite.js"
import Milieu from "./milieu.js"
const marche = () => {
    return (
        <div className="marche">
            <Head />
            <div className="noyeau-marche">
                <Droite />
                <Milieu />
            </div>
        </div>
    )
}
export default marche;