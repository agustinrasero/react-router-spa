import React from 'react'
import { useParams } from 'react-router-dom'

export default function Pagina() {

  const nombre = useParams()

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

  

  const filtrado = reyes.filter(valor => valor.nombre === nombre.nombre).map(valor => <div className='rey' key={valor.nombre}><img src={valor.img}></img><h4>{valor.nombre}</h4></div>)
  
  return (
    <div className='reyes'>
      {filtrado}
    </div>
  )
}
