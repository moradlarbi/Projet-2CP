import { useState } from 'react'
import '../../index.css'
import Header from '../landing/Header.js'
import Acc1 from './marche/Acc.js'
import Acc2 from './commandes/Acc.js'
import Acc3 from './budget/Acc.js'
import Acc4 from './comptable/Acc.js'
const Profil = () => {
    const [page, setPage] = useState(0);
    function submitForm() {
        setPage(page+1);
        if (page == 4){
            setPage(0);
        }
    }
    function creerDossier(){
        setPage(1);
    }
    function arreter(){
        setPage(0);
    }
    return (
        <div className="profil-container">
            <Header />
            <div className="btn-container">
                <button onClick={creerDossier} >Nouveau Dossier +</button>
            </div>
            {page==1 &&
                <Acc1 submitForm={submitForm} arreter={arreter} page={page}/>
            }
            {page==2 &&
                <Acc2 submitForm={submitForm} arreter={arreter} page={page} />
            }
            {page==3 &&
                <Acc3 submitForm={submitForm} arreter={arreter} page={page} />
            }
            {page==4 &&
                <Acc4 submitForm={submitForm} arreter={arreter} page={page} />
            }
            
        </div>
    )
}

export default Profil
