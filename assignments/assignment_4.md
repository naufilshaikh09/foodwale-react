1. Is JSX mandatory for react ?
- No JSX is not mandatory for react but it makes development faster.
- JSX is not a requirement for using React. Using React without JSX is especially convenient when you don’t want to set up compilation in your build environment.

Ref: 
https://reactjs.org/docs/react-without-jsx.html#:~:text=JSX%20is%20not%20a%20requirement,%2C%20...children)%20.

2. Is ES6 mandatory for React ?
- No ES6 is not mandatory for react.

Ref:
https://reactjs.org/docs/react-without-es6.html
https://medium.com/@rashmishehana_48965/must-know-es6-features-for-react-97ad57468623

3. {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX ?
- Both syntax are the same.

4. How can i write comment in JSX ?
- Using //

5. What is <React.Fragment></React.Fragment> and <></> ?
- React Fragment is a feature in React that allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM. 
- To return multiple elements from a React component, you'll need to wrap the element in a root element.
- Both syntax are indicating react fragment.

Ref:
https://refine.dev/blog/how-react-fragments-is-works/#:~:text=Fragment%20in%20Action-,What%20is%20React%20Fragment%3F,element%20in%20a%20root%20element.

6. What is virtual dom and  Reconciliation ?
- The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.

- In reconciliation diff algorithm working behind the scene.

Ref:
https://reactjs.org/docs/faq-internals.html
https://reactjs.org/docs/reconciliation.html

7. What is React Fiber ?
- React Fiber is a concept of ReactJS that is used to render a system faster and smoother. React is one of the popular JavaScript library used to create a responsive user interface. React makes coding simple as compared to other frameworks.

- React Fiber is a completely backward-compatible rewrite of the old reconciler. This new reconciliation algorithm from React is called Fiber Reconciler.

Ref:
https://www.velotio.com/engineering-blog/react-fiber-algorithm
https://github.com/acdlite/react-fiber-architecture

8. Why we need keys in React ? When do we need keys in React ?
Ref:
https://betterprogramming.pub/why-react-keys-matter-an-introduction-136b7447cefc
https://lo-victoria.com/why-react-keys-matter-an-introduction

9. Can we use index as keys in React ?
- We don't recommend using indexes for keys if the order of items may change.

Ref:
https://reactjs.org/docs/lists-and-keys.html#:~:text=We%20don't%20recommend%20using,an%20index%20as%20a%20key.

10. What is props in React ?
Ref:
https://reactjs.org/docs/components-and-props.html
https://www.freecodecamp.org/news/how-to-use-props-in-react/

11. What is Config Driven UI ?
Ref:
https://medium.com/captech-corner/an-intro-to-configuration-driven-development-cdd-48a1c088baa9
https://iamrajatsingh1.medium.com/config-driven-ui-c8e93b730993
https://techmusings.dev/buildingAConfigDrivenUiInReactPart1





