import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ArticlesComponent } from "../components/Component Articles/ArticlesComponent";
import { PresententionComponent } from "../components/Component Principal/Presentation/PresententionComponent";
import { BibliografiaComponent } from "../components/Component Secundario/Bibliografia/BibliografiaComponent";
import { Footer } from "../components/uiStatic/Footer";
import { NavBar } from "../components/uiStatic/NavBar";
import { ArticleComponent } from "../components/Component Article/ArticleComponent";

export const AppRouter = () => (
        <Router>
        <NavBar/>
            <Switch>
            <Route exact path="/" component={PresententionComponent}></Route>
            <Route exact path="/Bibliografia" component={BibliografiaComponent}></Route>
            <Route exact path="/blog" component={ArticlesComponent}></Route>
            <Route exact path="/blog/:name" component={ArticleComponent}></Route>
            <Redirect to="/" />
            </Switch>
        <Footer/>
        </Router>
  );
