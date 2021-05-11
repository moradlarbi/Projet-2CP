import React from 'react'
import "../../../index.css"
import useForm from './useForm'
import validation from './validation'
import Header from "../Service-march/header.js"
import moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'
const Acc = (props) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        validation
    );
    var numDoss = props.match.params.id;
    var duree = 10;
    var date = new Date()
    var debutDate = date.getFullYear()+'-'
    if (date.getMonth()<10){
        debutDate += '0'+date.getMonth()+'-'
    }
    else {
        debutDate += date.getMonth()+'-'+date.getDate();
    }
    if (date.getDate() < 10){
        debutDate += '0'+date.getDate()
    }
    else{
        debutDate += date.getDate();
    }
    var date2 = new Date(date.getTime() +(duree*24*60*60*1000))
    var limiteDate = date2.getFullYear()+'-'
    if (date2.getMonth()<10){
        limiteDate += '0'+date2.getMonth()+'-'
    }
    else {
        limiteDate += date2.getMonth()+'-';
    }
    if (date2.getDate() < 10){
        limiteDate += '0'+date2.getDate()
    }
    else{
        limiteDate += date2.getDate();
    }
    var current = new Date()
    var idDate = 'avance'
    if (current.getTime() > date2.getTime()){
        idDate = 'retard'
    }
    return (
        <div className="acc-container">
            <Header />
            <div className="form-container">
                <h2>Remplissez ce formulaire </h2>
                <h1>Dossier n°{numDoss}: Service marche</h1>
                <form onSubmit={handleSubmit} className="marche-form" noValidate>
                    <div className="cont date-debut-container">
                        <div className="content">
                                                       
                            <input 
                                type= "date"
                                value={debutDate} 
                                name="date"

                                className="date"/>
                        </div>
                        {errors.date && <p className="err-txt">{errors.date}</p>}
                        
                    </div>
                    <div className="cont type-container">
                        <div className="content">
                            <select name="type" name="type" defaultValue={''} value={values.type} onChange={handleChange}>
                                <option value='' disabled className="none">Selecter type de préstation *</option> 
                                <option value="marche1"> marche1 </option>
                                <option value="marche2"> marche2 </option>
                                <option value="marche3"> marche3 </option>
                            </select>
                        </div>
                        {errors.type && <p className="err-txt">{errors.type}</p>}
                    </div>
                    <div className="cont objet-container">
                        <div className=" content">    
                            <input 
                                type="text"
                                name="objet"
                                value={values.objet}
                                onChange={handleChange}
                                placeholder="Objet *" 
                                className="objet" 
                                autocomplete="off" required/>
                        </div>
                        {errors.objet && <p className="err-txt">{errors.objet}</p>}
                    </div>
                    <div className="cont fournisseur-container">
                        <div className=" content">
                            
                            <input 
                                type="text" 
                                name="fournisseur"
                                value={values.fournisseur}
                                onChange={handleChange}
                                placeholder="Fournisseur *" 
                                className="fournisseur" 
                                autocomplete="off" required/>
                            
                        </div>
                        {errors.fournisseur && <p className="err-txt">{errors.fournisseur}</p>}
                    </div>
                    <div className="cont respo-container">
                        <div className=" content">
                        <input 
                                type="text" 
                                name="respo"
                                value={values.respo}
                                onChange={handleChange}
                                placeholder="Responsable du dossier *" 
                                className="respo" 
                                autocomplete="off" required/>
                            
                        </div>
                        {errors.respo && <p className="err-txt">{errors.respo}</p>}
                    </div>
                    <div className="cont num-container">
                        <div className=" content">
                        <input 
                                type="text" 
                                name="num"
                                value={values.num}
                                onChange={handleChange}
                                placeholder="Numéro de convention *" 
                                className="num" 
                                autocomplete="off" required/>
                        </div>
                        {errors.num && <p className="err-txt">{errors.num}</p>}
                    </div>
                    <div className="cont desc-container">
                        <div className="content">
                            <input 
                                type="textarea"
                                name="desc"
                                value={values.desc}
                                onChange={handleChange} 
                                placeholder="Observation" 
                                className="desc"/>
                        </div>
                    </div>
                    <div className="cont file-container">
                        <div className="content">
                            <input 
                                type="file"
                                name="file"
                                id="file"
                                value={values.file}
                                onChange={handleChange} 
                                placeholder="" 
                                className="file" autocomplete="off"/>
                            <label className="icn-cont" for="file">
                                Telecharger vos fichiers
                                <FontAwesomeIcon icon={faFileDownload} className="icn" />
                            </label>
                        </div>
                    </div>
                    <div className="cont date-limite-container">
                        <div className="content" id={idDate}>
                                                       
                            <input 
                                type= "date"
                                value={limiteDate} 
                                name="date"
                                className="date2"/>
                        </div>
                        {errors.date && <p className="err-txt">{errors.date}</p>}
                        
                    </div>
                    <div className="btn-sauv">
                        <button type="submit" className="btn-done" > Sauvegarder </button>
                    </div>
                    <div className="btn-send">
                        <button type="submit" className="btn-done" > Envoyer </button>
                    </div>
                    <div className="btn-arreter">
                        <button type="" className="btn-" > Annuler </button>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default Acc
