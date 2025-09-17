import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'
import UserForm from './components/UserForm'
import ReviewForm from './components/ReviewForm'
import Thanks from './components/Thanks'
import React, { useState } from 'react'
import './App.css'

// hooks

import { useForms } from './hooks/useForms'

function App() {
  const [count, setCount] = useState(0)



  const formComponents = [
    <UserForm />,
    <ReviewForm />,
    <Thanks />
  ]

  const {currentStep, currentComponent, changeStep, isLastStep, isFirstStep} = useForms(formComponents)

  return (
    <>
      <div className="app">
        <div className="header">
          <h2>Deixe sua avaliação!</h2>
          <p>ficamos felizes com a sua compra, use o formulário para avaliar sua compra!</p>
        </div>
        <div className="form-container">
          <p>etapas</p>
          <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
            <div className="inputs-container">
              {currentComponent}
            </div>
            <div className="actions">
              {!isFirstStep && (
                <button type="button" onClick={(e) => changeStep(currentStep - 1, e)}>
                  <GrFormPrevious />
                  <span>Voltar</span>
                </button>
              )}
              {!isLastStep ? (
                <button type="submit">
                  <span>Avançar</span>
                  <GrFormNext />
                </button>
              ): (<button type="button">
                  <span>Enviar</span>
                  <FiSend />
                </button>)}
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App