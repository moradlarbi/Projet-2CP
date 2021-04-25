import Card from './Card.js'
import Header from "../landing/Header.js"
import React, { useState } from "react";
import FormSuccess from './Formsuccess.js'
import "../../index.css"
const Sign = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  function submitForm() {
    setIsSubmitted(true);
  }
    return (
      <>
      <Header />
      <div>
        {!isSubmitted ? (
          <Card submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
    )
}

export default Sign

