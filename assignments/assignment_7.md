1. What are various ways to add images into our app ?
- Using cdn or direct url or locally using path.

2. What would happen if we do console.log(useState()) ?
- There was an error while fetching restaurant ddata Error: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.

3. How useEffect will behave if we dont add dependency array ?
- Use effect will call every time after render if dont add dependency array.

4. What is SPA?
- SPA stands for Single Page Application. It is a web application or website that interacts with the user by dynamically rewriting the current web page, rather than loading entire new pages from a server. This allows for a more seamless user experience, as the website can update and respond to user actions without requiring a full page reload. Examples of SPA include Gmail, Google Maps, and Facebook.

5. What is diffrence between client side routing and server side routing ?
- The difference between this two routing have been stated above server sides needs to keep making requests to the server in order for the application to rerender, but client side does not need to keep make request to the server, it just does it once when the application is being loaded into the browser any other navigation or page change is just being rendered from the already saved application, so a client side application can still function without the internet as long as it has already being loaded in with the internet.








