import React from "react";
import { Switch,BrowserRouter } from "react-router-dom";
import Route from "./Route";

import SurahPage from "../page/SurahPage";
import SurahList from "../SurahList";

import { Suspense } from 'react';


//import Dashboard from "../pages/Dashboard";

export default function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={SurahList} />
            <Suspense fallback={<span>Loading...</span>}>
            {/*<Route path="/surah/:surahId" render={(props) => <SurahPage {...props}/>}/>*/}
            <Route path="/surah/:surahId" component={SurahPage}/>
            
            </Suspense>

            {/* redirect user to SurahList page if route does not exist and user is not authenticated */}
            <Route component={SurahList} />
        </Switch>
        </BrowserRouter>
    );
}
