import React, {useState, useEffect} from 'react'
import ContactForm from './contactForm.component'
import ItemList from '../list/itemList.component'

const Contacts = ({contacts, addContact}) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [duplicate, setDuplicate] = useState(false)
  const [alert, setAlert] = useState('')

const handleSubmit = (e) => {
  e.preventDefault()

  if (!duplicate) {
    addContact(name, phone, email)
    setName('')
    setPhone('')
    setEmail('')
  }
}

//useffect(function, [dependencies])
useEffect( () => {
  for(const contact of contacts) {
    if(contact.name === name) {
      if (!duplicate) {
        setDuplicate(true)
        setAlert('This person is already in your Contacts')
      }
      return //jump out of loop
    } else {
      setDuplicate(false)
      setAlert('')
    }
  }
}, [name, contacts, duplicate]
)

return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm name={name} 
                     setName={setName} 
                     phone={phone}
                     setPhone={setPhone}
                     email={email}
                     setEmail={setEmail}
                     handleSubmit={handleSubmit}
                     alert={alert} />
        
      </section>
       <hr /> {/* line dividing sections */}
      <section>
        <h2>Contacts</h2>
        <ItemList items={contacts} />
      </section>
    </div>
  );
  
} //end Contacts Component

export default Contacts