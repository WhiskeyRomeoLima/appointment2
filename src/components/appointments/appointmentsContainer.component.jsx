import React, {useState} from 'react'
import AppointmentForm from './appointmentForm.component'
import ItemList from '../list/itemList.component'

const Appointments = ({
  addAppointment,
  appointments,
  contacts
}) => {
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState(
    contacts.length > 0 ? contacts[0].name : ""
  ); //Re: ContactPicker - If contacts has values, sets the first as the default value of contact
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment(title, contact, date, time);
    setTitle("");
    setContact("");
    setDate("");
    setTime("");
  };

  return (
    <>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          contacts={contacts}
          title={title}
          setTitle={setTitle}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <ItemList items={appointments} />
      </section>
    </>
  );
}

export default Appointments