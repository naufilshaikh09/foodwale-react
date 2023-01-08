1. What is Emmet?
- Emmet is a built-in feature in Visual Studio Code. You don’t have to install any extensions for emmet support. Emmet prevents you from writing the entire code by yourself by providing Emmet abbreviation. Emmet is enabled by default in html, haml, pug, slim, jsx, xml, xsl, css, scss, sass, less and stylus files, and also in languages that inherits from any of the above like handlebars and PHP.

- When you start typing an Emmet abbreviation, you will see the abbreviation displayed in the suggestion list in the form of a dropdown. If you type the short form (like element name) then you will see a preview of the expansion. 

Ref:
https://medium.com/@kartik2406/web-development-with-vs-code-part-1-emmet-6af80f0f630c
https://www.geeksforgeeks.org/emmet-in-visual-studio-code/

2. Difference between a Library and Framework?
- The technical difference between a framework and library lies in a term called inversion of control.

- When you use a library, you are in charge of the flow of the application. You are choosing when and where to call the library. When you use a framework, the framework is in charge of the flow. It provides some places for you to plug in your code, but it calls the code you plugged in as needed.

Ref:
https://www.freecodecamp.org/news/the-difference-between-a-framework-and-a-library-bd133054023f/

3. What is CDN? Why do we use it?
- A content delivery network (CDN) refers to a geographically distributed group of servers which work together to provide fast delivery of Internet content.

- A CDN allows for the quick transfer of assets needed for loading Internet content including HTML pages, javascript files, stylesheets, images, and videos. The popularity of CDN services continues to grow, and today the majority of web traffic is served through CDNs, including traffic from major sites like Facebook, Netflix, and Amazon.

Ref:
https://www.cloudflare.com/en-in/learning/cdn/what-is-a-cdn/

4. Why is React known as React?
Ref:
https://reactjs.org/blog/2013/06/05/why-react.html
https://reactjs.org/blog/2016/09/28/our-first-50000-stars.html#fbolt-is-born

5. What is crossorigin in script tag?
- The crossorigin attribute sets the mode of the request to an HTTP CORS Request.

Ref:
https://www.w3schools.com/tags/att_script_crossorigin.asp
https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin
https://reactjs.org/docs/cdn-links.html

6. What is diference between React and ReactDOM?
- React and ReactDOM were only recently split into two different libraries. Prior to v0.14, all ReactDOM functionality was part of React. This may be a source of confusion, since any slightly dated documentation won't mention the React / ReactDOM distinction.

- As the name implies, ReactDOM is the glue between React and the DOM. Often, you will only use it for one single thing: mounting with ReactDOM.render(). Another useful feature of ReactDOM is ReactDOM.findDOMNode() which you can use to gain direct access to a DOM element. (Something you should use sparingly in React apps, but it can be necessary.) If your app is "isomorphic", you would also use ReactDOM.renderToString() in your back-end code.

- For everything else, there's React. You use React to define and create your elements, for lifecycle hooks, etc. i.e. the guts of a React application.

- The reason React and ReactDOM were split into two libraries was due to the arrival of React Native. React contains functionality utilised in web and mobile apps. ReactDOM functionality is utilised only in web apps. [UPDATE: Upon further research, it's clear my ignorance of React Native is showing. Having the React package common to both web and mobile appears to be more of an aspiration than a reality right now. React Native is at present an entirely different package.]

- See the blog post announcing the v0.14 release: https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html

- React is a JavaScript library for building User Interfaces and ReactDOM is the JavaScript library that allows React to interact with the DOM.

Ref:
https://coursework.vschool.io/react-vs-reactdom/
https://medium.com/programming-sage/react-vs-react-dom-a0ed3aea9745

6. What is difference between react.development.js and react.production.js files via CDN?
Ref:
https://www.copycat.dev/blog/reactjs-cdn/


7. What is async and defer? 
Ref:
https://www.youtube.com/watch?v=IrHmpdORLu8