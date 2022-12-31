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

const heading1 = React.createElement(
    "h1",
    {
        id: "title1",
    },
    "Hello from parcel"
);

const heading2 = React.createElement(
    "h2",
    {
        id: "title2",
    },
    "Heading 2"
);

const container = React.createElement(
    "div",
    {
        id: "container",
    },
    [heading1, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root
root.render(container);