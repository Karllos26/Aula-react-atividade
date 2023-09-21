/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import './App.css'
import ButtonFatec from './components/ButtonFatec'
import InputFatec from './components/InputFatec'

function App() {
  //const [count, setCount] = useState(0)

  return (
<>

<InputFatec value='' type='text' placeholder='Nome' />
<br></br>
<InputFatec value='' type='email' placeholder='E-Mail' />
<br></br>
<InputFatec value='' type='tel' placeholder='Telefone' />
<br></br>
<ButtonFatec type='submit' label='Enviar Form' />
</>
  )
}

export default App
