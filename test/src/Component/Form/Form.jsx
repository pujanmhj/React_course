import React from 'react'
import { Route,Routes} from "react-router-dom"
import { Home } from './Home'
import { Aboutus } from './Aboutus'
import { Contact } from './Contact'

function Form() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home />} />
       <Route path='/about' element={<Aboutus/>} />
       <Route path='/contact' element={<Contact/>} />
      </Routes>
      
    </div>
  )
}
export default Form
