1. How do you create Nested Routes react-router-dom configuration ?
- using childrent of children.

2. What is the order of life cycle method called calls in class based components ?
- constructor >> render >> componentDidMount >> componentDidUpdate >> componentWillUnmount

- if one parent component have two child component calling like <childComponent/> <childComponent/>
then life cycle will works like

- constructor(parent) >> render(parent) >> constructor(child-1) >> render(child-1) >> constructor(child-2) >> render(child-2) >> componentDidMount(child-1) >> componentDidMount(child-2) >> componentDidMount(parent)

- first it gets render then update.

Ref:
https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

3. Why do we use componentDidMount?
- The componentDidMount() method allows us to execute the React code when the component is already placed in the DOM (Document Object Model). This method is called during the Mounting phase of the React Life-cycle i.e after the component is rendered.

Ref:
https://reactjs.org/docs/react-component.html

4. Why do we use componentWillUnmount ?
- componentWillUnmount() is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount() .

Ref:
https://reactjs.org/docs/react-component.html

5. We do we use super(props) in constructor ?
- Constructor: Constructor is a method that is used to create and initialize an object created with a class and this must be unique within a particular class. Super: Super is a keyword that is used to call the parent's class method and data. It is used for the inheritance model of class

- Super() function is to call the constructor of the parent class. It is used when we need to access a few variables in the parent class.

Ref:
https://www.turing.com/kb/beginners-guide-to-super-and-super-props-in-react

6. Why can't we have the callback function of useEffect async ?
- Because React's useEffect hook expects a cleanup function returned from it which is called when the component unmounts

Ref: 
https://ultimatecourses.com/blog/using-async-await-inside-react-use-effect-hook






