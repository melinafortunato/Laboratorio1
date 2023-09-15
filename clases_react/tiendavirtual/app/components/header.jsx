
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'

const Header = ()=>{
    return(<> <header className='fixed'>
    <nav className='h-[100px] flex '>
      <img className='logo' src="./Sin título 2.png" alt="" />
      <div className='m-5 text-xl text-center flex items-center'>
        <Link href='/' className="no-underline text-center rounded-lg px-3 py-2 text-black font-medium hover:text-rose-600">HOME</Link>
        <Link href='/Poesias' className="no-underline text-center rounded-lg px-3 py-2 text-black font-medium hover:text-rose-600">POESIAS</Link>
        <Link href='/Cuentos' className="no-underline text-center rounded-lg px-3 py-2 text-black font-medium hover:text-rose-600">CUENTOS</Link>
        <Link href='/Encuentros' className="no-underline text-center rounded-lg px-3 py-2 text-black font-medium hover:text-rose-600">Encuentros</Link>
        <Link href='/Acerca_de' className="no-underline text-center rounded-lg px-3 py-2 text-black font-medium hover:text-rose-600">TIENDA</Link>
      </div>
    </nav>
  </header>
</>
    )
}
export default  Header
 