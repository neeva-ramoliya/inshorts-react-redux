import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/header";
import HomeComponent from "../components/home";
import NewsDetailComponent from "../components/newsdetails";
import NotFoundComponent from "../components/notfound";

const AppRouter = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div>
                <Header />
                <div className="content-panel">
                    <Switch>
                        <Route path="/" component={HomeComponent} exact={true} />
                        <Route path="/news/:id" component={NewsDetailComponent} exact={true} />
                        <Route component={NotFoundComponent} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter >
    )
}

export default AppRouter;