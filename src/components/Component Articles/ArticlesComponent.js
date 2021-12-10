import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { ArticulosChicos } from './Articulos chicos/ArticulosChicos'
import { ArticulosLargos } from './Articulos largos/ArticulosLargos'
import { ArticulosMedios } from './Articulos medio/ArticulosMedios'

export const ArticlesComponent = ({history}) => {

        window.scrollTo(0, 0);    

        const state = useSelector(state => state.articles)

        let contador = 0;
    

    return (
        <section className="main2">
            <section className="blog-presention">
                <div className="container">
                    <div className="info-blog">
                        <div className="text-blog">
                            <h1>Mi blog</h1>
                            <p>Este es mi blog, en el cual suelo subir contenido acerca de 
                                noticias y opiniones en la version publica. Hay otra que 
                                es privada en el cual si quieren acceder es a traves 
                                de una solitud en el cual pueden optar dandole
                                click al boton de abajo :) 
                            </p>
                            <button>Hacer solicitud</button>
                        </div>
                        <div className="image">
                            <img src="https://res.cloudinary.com/dsjubfgpw/image/upload/v1617646875/undraw_Sharing_articles_re_jnkp_1_rkkpfc.png" alt=""/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="articles">
                <div className="text-public">
                    <h1>Publicaciones</h1>
                </div>
                {
                    state.map(() => {
                        if(contador % 4){
                            return <ArticulosLargos history={history}/>
                        } else if(contador % 2){
                            return <ArticulosMedios/>
                        } else if(contador % 1){
                            return <ArticulosChicos style={{paddingTop: '130px'}}/>
                        } else {
                            contador= contador + 1;
                        }
                    })
                }
                    {/* <ArticulosLargos history={history}/>
                    <ArticulosMedios/>
                    <ArticulosChicos style={{paddingTop: '130px'}}/> */}
            </section>

        </section>
    )
}
