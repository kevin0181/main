import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Helmet} from "react-helmet";
import loadJsFile from "./assets/js/loadJsFile";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        {/*<Helmet>*/}
        {/*    <script defer={true} src={"/public/assets/js/util.js"}/>*/}
        {/*</Helmet>*/}
        <App/>
    </>
);

// loadJsFile();