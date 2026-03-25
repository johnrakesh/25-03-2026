import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import { Toggle } from './components/usestateToggle'
// import { Practice } from './components/usestatepractice1'

// import { InputFieldState } from './components/usestateInput'
// import { InputFieldState1 } from './components/usestateInput1'
// import { CharacterCount } from './components/usestateCharactercount'
import { TodoList } from './components/useStateTodolist'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <TodoList />
  </StrictMode>
)
