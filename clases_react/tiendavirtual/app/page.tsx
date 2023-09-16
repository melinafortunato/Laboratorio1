import Image from 'next/image'

import  Cardcentro  from "@/app/components/cardcentro"

import  Correo from "@/app/components/correo"

export default function Home() {
  return (
    <><div className="fluid margen ">
      <h1 className="titulo">Poesias viajeras...</h1>
      <p className="titulo1">"Aunque quieras controlarlo</p>
      <p className="titulo2">ya esta sucediendo..."</p>
      <p className="titulo3"> Melina Fortunato.</p>
      <img src='/poesias1.png'></img>
    </div>
    <Cardcentro/>
    <Correo/>

  </>
    
  )
}
