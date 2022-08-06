 import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <>
    <footer className='pie-pagina bg-dark'>
        <div className='grupo-1'>
        <div className='box'>
                <figure>
                    <>
                    <img className='imgFooter' src="../img/logo-monchis.png" alt="logo" width="160px" height="auto"/>
                    </>
                </figure>
            </div>
        <div className='box'>
                <h2 className='nosFooter'>Sobre Nosotros</h2>
                <p className='pFooter'> Puro monchis fue creado para personas que repentinamente tienen un hambre voraz , viene del inglés <strong>" To munch "</strong> que quiere decir masticar de una manera rápida y ruidosa. </p>
            </div>
            <div className='box'>
                <h2 className='sigFooter'>Siguenos</h2>
                <div className='red-social'>
                <img className='img-fa' src="../img/fa-fa.png" alt="Logo face"  />
                <img className='img-fa' src="../img/ins-ins.png" alt="logo instagram" />
                <img className='img-fa' src="../img/what-what.png" alt="logo whatsapp" />
                </div>
            </div>
        </div>
        <div className='grupo-2'>
            <small>&copy;2022 <b> YaelSan</b>  - Todos los Derechos Reservados. </small>
        </div>
    </footer>
    </>
  )
}

export default Footer

// <div className="container-fluid dFooter">
//         <div className="row">
//             <div className="col-lg-9 col-md-7 col-sm-4 img-footer">
//             <img className='imgFooter' src="../img/logo-monchis.png" alt="logo" width="160px" height="auto"/>
//             </div>
//             <div className="col-lg-3 col-md-5 col-sm-4  linkFooter">
//                 <div className="d-flex flex-column mb-3">
//                     <div className="p-2 footerLink"><strong><u>Links</u></strong></div>
//                     <p className="aFooter">Intragram</p>
//                     <p className="aFooter">whatsApp</p>
//                 </div>
//             </div>
//         </div>
//     </div>