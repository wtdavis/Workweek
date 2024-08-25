import { createRoot } from 'react-dom/client';
import React from 'react';
import "./index.css"


const App = function () {
        return (
                <div> 
                        <h1>React is workingggggg!</h1>
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