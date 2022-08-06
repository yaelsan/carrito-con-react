import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className="container-fluid dFooter">
        <div className="row">
            <div className="col-lg-9 col-md-7 col-sm-4 img-footer">
            <img className='imgFooter' src="../img/logo-monchis.png" alt="logo" width="160px" height="auto"/>
            </div>
            <div className="col-lg-3 col-md-5 col-sm-4  linkFooter">
                <div className="d-flex flex-column mb-3">
                    <div className="p-2 footerLink"><strong><u>Links</u></strong></div>
                    <p className="aFooter">Intragram</p>
                    <p className="aFooter">whatsApp</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer