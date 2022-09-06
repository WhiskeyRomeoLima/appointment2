import {Outlet, NavLink} from 'react-router-dom'


const NavBar = () => {
  return(
    <nav>
      <NavLink to='/contacts'>
          Contacts
      </NavLink>
      <NavLink to='/appointments'>
          Appointments
      </NavLink>
    </nav>
  )
}

export default NavBar