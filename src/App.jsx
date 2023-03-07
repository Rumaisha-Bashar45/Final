import './App.css'
import Props from './Comp/Props'
import Form from './Comp/Form'
import Welcome from './Page/Welcome'
import Formikk from './Comp/Formikk'

import { BrowserRouter, Routes,Route } from 'react-router-dom'

function App() {
  return (
<BrowserRouter>
<Props>
    <Routes>
      <Route path='/' element={<Welcome></Welcome>} ></Route>
      <Route path="/Formikk" element={<Formikk></Formikk>}></Route>
      <Route path="/Form" element={<Form></Form>}></Route>
    </Routes>
</Props>
</BrowserRouter>
  )
}

export default App
