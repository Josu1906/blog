import React from 'react'
import { HistoryComponent } from '../History/HistoryComponent'
import { TitleComponent } from './Title/TitleComponent'

export const BibliografiaComponent = () => {
    window.scrollTo(0, 0);    

    return (
        <section className="main2">
            <section className="titulo">
                <TitleComponent/>
            </section>
            <section className="history">
                <HistoryComponent/>
            </section>
        </section>
    )
}
