"use client"
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'
import Cardfooter from "@/app/components/cardfooter"


const Footer1 = () => {
    return (<><div className='bg-danger text-center bottom-0 left-0 w-full m-0 p-0'> 
    <br></br>
    <p className='lk mb-4'>Conoceme un poco mas en instagram</p>
    <div className='mb-4'><Link href='' className="lk pb-2 px-3 py-2 mt-5 font-medium text-black Hover:text-white">PAGINA DE INTAGRAM</Link></div>
    <Cardfooter /> <br></br>
    </div>
    </>
    )
}
export default Footer1
