import React from 'react'
import { useSelector } from 'react-redux'

export const ArticulosLargos = ({history}) => {
    const state = useSelector(state => state.articles)
    console.log(state);

    const changeRoute = (titulo) => {
        history.push(`blog/${titulo}`);
    }

    return (
        <div className="articles-col">
        <div className="article-row">
            {
                state.map( (articulo) => {
                    return  (
                        <div className="element-conf" key={articulo.name} onClick={() => changeRoute(articulo.name)}>
                            <div className="text-blog-article-conf">
                            </div>
                            <div className="article-text-conf">
                                <h3>{articulo.name}</h3>
                                <p>{articulo.descripcion}</p>                    
                            </div>
                        </div>
                    )
    
                })
            }
        </div>
    </div>
    )
}
