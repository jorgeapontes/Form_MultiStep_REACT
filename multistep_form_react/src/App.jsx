import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import {UserForm} from './components/UserForm'
import {ReviewForm} from './components/ReviewForm'
import {Thanks} from './components/thanks'
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

  const {currentStep, currentComponent} = useForm(formComponents)

  return (
    <>
      <div className="app">
        <div className="header">
          <h2>Deixe sua avaliação!</h2>
          <p>ficamos felizes com a sua compra, use o forulário para avaliar sua compra!</p>
        </div>
        <div className="form-container">
          <p>etapas</p>
          <form> 
            <div className="inputs-container">
              {currentComponent}
            </div>
            <div className="actions">
              <button type="button">
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
              <button type="submit">
                <GrFormNext />
                <span>Avançar</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App