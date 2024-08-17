import React from 'react'
import { NavLink } from 'react-router-dom'

function Naveg() {
  return (
    <div>
      <nav>
      <NavLink className={
            ({isActive}) => (isActive ? "activado"
                : null
             )
            } to='/'>Home
      </NavLink>

      <NavLink className={
            ({isActive}) => (isActive ? "activado"
                : null
             )
            } to='/Atanagildo'>Atanagildo
      </NavLink>

      <NavLink className={
            ({isActive}) => (isActive ? "activado"
                : null
             )
            } to='/Ervigio'>Ervigio
      </NavLink>

      <NavLink className={
            ({isActive}) => (isActive ? "activado"
                : null
             )
            } to='/Ataulfo'>Ataulfo
      </NavLink>


      <NavLink className={
            ({isActive}) => (isActive ? "activado"
                : null
             )
            } to='/Leovigildo'>Leovigildo
      </NavLink>



      </nav>
    </div>
  )
}

export default Naveg