import React from 'react'
import { Link } from 'react-router-dom'

export const AboutMeComponent = () => {
    return (
        <section className="quien-es" id="quien-es">
        <div className="container">
            <div className="about-me">
                <div className="text-about-me">
                    <h2>¿Quien es<br/> <span>Josue Gonzalez?</span></h2>
                    <p>
                        Josue Gonzalez es un joven estudiante del colegio San Agustin 
                        del Marquez. Desde que era muy chico le encantaba las computadoras 
                        y a los 12  tuvo la oportunidad de <span>escribir su primera linea de código</span>
                        en el lenguaje <span>"JavaScript"</span> a traves de una plataforma que se llama 
                        <span>"Platzi"</span>, el cual lo llama <span>"El momento mas increible de su adolecensia".</span>
                        Hoy Josue despues de unos 2 años <span>sigue aprendiendo y avanzando.</span> 
                    </p>
                    <h3>¿Quieres leer mas sobre mi?</h3>
                    <Link to="/Bibliografia"><button>Dale click aqui</button></Link>
                </div>
                <div className="about-me-images">
                    <div className="img so">
                        <div className="s">
                            <div>
                                <img src="https://res.cloudinary.com/dsjubfgpw/image/upload/v1617637443/WhatsApp_Image_2021-03-09_at_12.05.21_PM_11_hamnrt.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="img1 so">
                        <div className="s">
                            <img src="https://res.cloudinary.com/dsjubfgpw/image/upload/v1617637443/WhatsApp_Image_2021-03-09_at_12.05.21_PM_12_a3779o.jpg"  alt=""/>
                        </div>
                    </div>
                    <div className="img2-2 so">
                        <div className="s">
                            <img src="https://res.cloudinary.com/dsjubfgpw/image/upload/v1617637443/WhatsApp_Image_2021-03-09_at_12.05.21_PM_13_jj24m5.jpg" className="img2" alt=""/>
                        </div>
                    </div>
                    <div className="img3 so">
                        <div className="s">
                            <img src="https://res.cloudinary.com/dsjubfgpw/image/upload/v1617637443/WhatsApp_Image_2021-03-09_at_12.05.21_PM_14_ouyglh.jpg"  alt=""/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
        )
}
