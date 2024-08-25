import { createRoot } from 'react-dom/client';
import React from 'react';
import "./index.css"


const App = function () {
        return (
                //no styling on #root! styling "root" starts here, at react-body, aka "body"
                <div className="react-body"> 

                        <h1 className="head-title title header">React is workinsgggggg!</h1>
                        <Button/>
                </div>
        )
}


const Button = function () {
        return (
                <>
                <div className='button button-medium-blue'>Press Me Mortal </div>
                </>
        )
}


function renderApp () {
        const root = createRoot(document.getElementById("root"));
        root.render(<App/>);
}

document.addEventListener("DOMContentLoaded", renderApp) 