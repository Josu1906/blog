import React from 'react'

export const ThemeArticleComponent = ({tema}) => {
    const texto = document.getElementById('parrafo');
    console.log(texto)
    return (
        <div className="text-history" dangerouslySetInnerHTML={{ __html: tema }}>
        </div>
    )
}
