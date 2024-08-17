import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Home() {
    const reyes=[
        {
            nombre:"Atanagildo",
            img: "https://html6.es/img/rey_atanagildo"
        },{
            nombre:"Ervigio",
            img: "https://html6.es/img/rey_ervigio"
        },{
            nombre:"Ataulfo",
            img: "https://html6.es/img/rey_ataulfo"
        },{
            nombre:"Leovigildo",
            img: "https://html6.es/img/rey_leovigildo"
        }
      ]
      
      const mapeado = reyes.map(valor => <div className='rey' key={valor.nombre}><img src={valor.img}></img></div>)


      const rey = () =>{

      }

  return (
    <div>
      <div className='reyes'>
        <nav>
            <NavLink className='navl' to='Atanagildo'>
                <img src={reyes[0].img}></img>
            </NavLink>

            <NavLink className='navl' to='Ervigio'>
                <img src={reyes[1].img}></img>
            </NavLink>

            <NavLink className='navl' to='Ataulfo'>
                <img src={reyes[2].img}></img>
            </NavLink>

            <NavLink className='navl' to='Leovigildo'>
                <img src={reyes[3].img}></img>
            </NavLink>
        </nav>
        {/*mapeado*/}
      </div>
    </div>
  )
}
