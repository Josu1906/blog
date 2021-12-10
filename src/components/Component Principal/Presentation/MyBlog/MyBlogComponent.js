import React from 'react'
import { Link } from 'react-router-dom'

export const MyBlogComponent = () => {
    return (
        <section className="blog">
            <div className="container1">
                <div className="text-blog">
                    <img src="https://res.cloudinary.com/dsjubfgpw/image/upload/v1617637952/undraw_book_reading_kx9s_2_bjwv2f.png" alt=""/>
                    <h2>¿Quieres leer mi <span>blog?</span></h2>
                    <Link to="/blog"><button>Dale click aqui</button></Link>
                </div>
            </div>
        </section>
    )
}
