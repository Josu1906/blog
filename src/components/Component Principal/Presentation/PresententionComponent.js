import React from 'react';
import { ProjectsPersonals } from '../Projects Personals/ProjectsPersonals';
import { AboutMeComponent } from './About Me/AboutMeComponent';
import { MyBlogComponent } from './MyBlog/MyBlogComponent';
import { PresentetionComponent } from './PresentationComp/PresentetionComponent';

export const PresententionComponent = () => {
    window.scrollTo(0, 0);    

    return (
        <>
        <section className="main">
            <PresentetionComponent/>

            <AboutMeComponent/>

            <ProjectsPersonals/>

            <MyBlogComponent/>

        </section>
        </>
    )
}
