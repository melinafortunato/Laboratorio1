"use client"
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'

const Footer2 = ()=>{
    return(<><footer className='h-[60px] flex bg-black bottom-0 left-0 w-full m-0'>
<div className='flex items-center justify-center w-full'>
  <Link href='/Contactos' className="no-underline rounded-lg px-3 py-2 font-medium text-white hover:text-rose-600">SOBRE POESIAS VIAJERAS /</Link>
  <Link href='/#' className="no-underline rounded-lg px-3 py-2 font-medium text-white hover:text-rose-600">CONTACTOS</Link>
</div>
</footer>
</>
    )
}
export default Footer2
 