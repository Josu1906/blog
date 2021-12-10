import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {

    const actionMenu = ({target}) => {
        console.log(target.style);
        let menu = document.getElementById('menu');
        
        if(menu.style.right === null || menu.style.right === '') menu.style.right = '-200px';

         if(menu.style.right === '-200px'){
            target.style.color = '#004878';
            menu.style.right = '200px';
        } else {
            menu.style.right = '-200px';                
            target.style.color = '#fff';
        }

    }
    // let boton = document.getElementById('menu-click');
    // console.log(menu)
    // menu.style.right = '-200px';
    // boton.onclick = function(){
    //     else {
    //     }
    // };

    return (
        <header>
            <div className="container">
                <div className="text">
                    <div className="name">
                        <h3>Josue Gonzalez Villarroel</h3>
                    </div>
                <div className="enlaces">
                    <nav>
                            <Link className="enlazar-other" to="/">Home</Link>
                            <Link className="enlazar-other" to="/blog">Blog</Link>
                            <Link className="enlazar-other" to="/Bibliografia">Biografia</Link>
                            <a className="enlaces-redes" href="https://twitter.com/josu1906">@josu1906</a>
                            <a className="enlaces-redes-other" href="https://www.instagram.com/joo.suee/?hl=es">@joo.suee</a>
                        </nav>
                    </div>
                    <div className="menu-enlace">
                        {/* <i className="fi-rr-align-justify"  id="menu-click"></i> */}
                        <i className="fas fa-align-justify" id="menu-click" onClick={actionMenu} ></i>
                    <div id='menu' className="menu">
                        <Link to="/" className='Inicio'>Inicio</Link>
                        <Link to="/blog" className='Blog'>Blog</Link>
                        <Link to="/Bibliografia" className='Bibliografia'>Bibliografia</Link>
                    </div>
                </div>
                </div>
            </div>
        </header>
    )
}
