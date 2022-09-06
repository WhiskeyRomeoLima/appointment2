import React, {useState} from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Contacts from './components/contacts/contactsContainer.component'
import Appointments from './components/appointments/appointmentsContainer.component'
import NavBar from './components/navigationBar/navBar.component'

function App() {
const [contacts, setContacts ] = useState([])
const [appointments, setAppointments] = useState([])

const addContact = (name, email, phone) => {
 setContacts((prev) => { return [...prev, {name: name, email: email, phone: phone}] })
}

const addAppointment = (title, contact, date, time) => {
 setAppointments((prev) => {return [...prev, {title: title, contact: contact, date: date, time: time}]})
}

  return (
    <>
      <NavBar />
    <main>
      <Routes>
        <Route path='/' > 
          <Route path='/contacts' element={<Contacts contacts={contacts} addContact={addContact} />}/>
          <Route path='/appointments' element={<Appointments appointments={appointments} addAppointment={addAppointment} contacts={contacts}/>} />
        </Route>
      </Routes>      
    </main>
    </>
  );
}

export default App;
