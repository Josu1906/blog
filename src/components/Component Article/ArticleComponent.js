import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {TitleArticleComponent} from './Title article/TitleArticleComponent'
import {ThemeArticleComponent} from './Theme article/ThemeArticleComponent'


export const ArticleComponent = () => {
    window.scrollTo(0, 0);    

    const {name} = useParams();

    const state = useSelector(state => state.articles);

    const [article] = state.filter(articulo => articulo.name === name);

    return (
        <section className="main2">
            <section className="titulo">
                <TitleArticleComponent titulo={article.name}/>
            </section>
            <section className="history">
                <ThemeArticleComponent tema={article.body}/>
            </section>
        </section>
    )
}
