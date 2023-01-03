/***
 *
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Dev abd Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatble with older version of browser
 * HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero Config
 * Transitive Dependencies
 */

import React from 'react';
import ReactDOM from 'react-dom/client';

//CreateElement
const h1 = React.createElement(
    "h1",
    {
        id: "h1",
        key: "h1",
    },
    "Getting"
);

const h2 = React.createElement(
    "h2",
    {
        id: "h2",
        key: "h2",
    },
    "Started"
);

const h3 = React.createElement(
    "h3",
    {
        id: "h3",
        key: "h3",
    },
    "Namaste React"
);

const title = React.createElement(
    "div",
    {
        className: "title",
    },
    [h1, h2, h3]
);

//JSX
const jsx = (
    <div className='title'>
        <h1 id='jh1' customeattribute1="hello1">hello1</h1>
        <h2 id='jh2' customeattribute2="hello2">hello2</h2>
        <h3 id='jh3' customeattribute3="hello3">hello3</h3>
    </div>
)

//Functional Component //Composing component > when you use component inside another component
const FunctionalComponent = () => {
    return (
        <div>{jsx}</div>
    )
}

const mergeElements = (
    <div>
        {title}
        {jsx}
        <FunctionalComponent />
        {/* <FunctionalComponent></FunctionalComponent> */}
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root
// root.render(title);
// root.render(jsx);
root.render(mergeElements);
// root.render(<FunctionalComponent />);