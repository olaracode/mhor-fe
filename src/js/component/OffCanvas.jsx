import React from 'react'
import "../../styles/offCanvas.css"
import { Link } from 'react-router-dom'

export const OffCanvas = () => {
    return (
        <>
            <button className="btn  d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">
                <i className="bi bi-list fs-2"></i>
            </button>

            <div className="offcanvas-lg offcanvas-end" tabIndex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title fw-semibold" id="offcanvasResponsiveLabel">MHOR STYLE</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body ">
                    <div className='mx-2 fs-5 py-3'>
                        <Link to={"/"} className='link offcanvasItem'>INICIO</Link>
                    </div>
                    <div className='mx-2 fs-5 py-3'>
                        <Link to={"/all/carteras"} className='link offcanvasItem'>CARTERAS</Link>
                    </div>
                    <div className='mx-2 fs-5 py-3'>
                        <Link to={"/all/prendas"} className='link offcanvasItem'>PRENDAS</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
