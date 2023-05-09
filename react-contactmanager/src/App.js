import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar'
import AddContacts from './pages/AddContacts'
import ContactDetails from './pages/ContactDetails'
import ContactList from './pages/ContactList'
import DeleteContact from './pages/DeleteContact'
import EditContacts from './pages/EditContacts'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<AddContacts />} />
        <Route path='/contactList' element={<ContactList />} />
        <Route path='/contactDetails/:cid' element={<ContactDetails />} />
        <Route path='/editContact/:id' element={<EditContacts />} />
        <Route path='/deleteContacts/:id' element={<DeleteContact />} />
      </Routes>

    </BrowserRouter>
  )
}

