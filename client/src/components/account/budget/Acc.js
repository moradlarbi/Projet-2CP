import React from 'react'
import "../../../index.css"
import useForm from './useForm'
import validation from './validation'
import moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'
const Acc = ({submitForm, arreter, page}) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validation,
        page
      );
    return (
        <div className="acc-container">

            
            <div className="form-container">
                <h1>Dossier n°1: Service budget</h1>
                <form onSubmit={handleSubmit} className="marche-form" noValidate>
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
                    <div className="cont date-container">
                        <div className="content">
                                                       
                            <input 
                                type= "date"
                                value={values.date} 
                                name="date"

                                className="date"/>
                        </div>
                        {errors.date && <p className="err-txt">{errors.date}</p>}
                        
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
                    <div className="btn-send">
                        <button type="submit" onClick={submitForm} className="btn-send" > Envoyer </button>
                    </div>
                    <div className="btn-arreter">
                        <button type="" onClick={arreter} className="btn-" > Annuler </button>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default Acc
