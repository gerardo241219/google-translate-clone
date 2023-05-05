import { useReducer } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { type State, type Action } from './types.d'

// States
export const initialState = { // step 1
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false
}

function reducer(state: State, action: Action) { // step 2
  const { type } = action

  if (type === "INTERCHANGE_LANGUAGES") {
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    }
  }

  if (type === "SET_FROM_LANGUAGE") {
    return {
      ...state,
      formLanguage: action.payload
    }
  }

  if (type === "SET_TO_LANGUAGE") {
    return {
      ...state,
      toLanguage: action.payload
    }
  }

  if (type === "SET_FROM_TEXT") {
    return {
      ...state,
      loading: true,
      fromText: action.payload,
      result: ''
    }
  }

  if (type === "SET_RESULT") {
    return {
      ...state,
      loading: false,
      result: action.payload
    }
  }

  return state
}

function App() {
  const [ state.fromLanguage, dispatch] = useReducer(reducer, initialState) // step 3

  console.log({ fromLanguage })

  return (
    <div className="App">
      <h1>Google Translate</h1>
      <button onClick={() => {
        dispatch({ type: "SET_FROM_LANGUAGE", payload: "es" })
      }}>Cambiar loading</button> {fromLanguage}
    </div>
  )
}

export default App
