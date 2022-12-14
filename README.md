# Resources 
- https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
- https://thenewtoys.dev/blog/2021/02/08/lets-talk-about-how-to-talk-about-promises/
- https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing_workers
- https://developer.mozilla.org/en-US/docs/Web/API/Worker

## Source 
- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous

## Intro to AJAX

- Event handlers as a form of asynchronous programming. 
 - This is just like the event handlers we've encountered in a previous module, except that instead of the event being a user action, such as the user clicking a button, the event is a change in the state of some object.

- XMLHttpRequest(XHR) as an asynchronous API.

- use of callbacks to implement asynchronous functions in JS.

- the callback pyramid of doom.

- the Promise object as foundation of asynchronous programming in modern JS. 

## How to use promises 

- Promise-based APIs return a Promise object once the async function starts its operation. You can then 
attach handlers to this object which will be executed when the operation has succeeded or failed. 

- Instead of adding event handlers to the XHR object, we pass a handler function into the then() method of the returned promise object. 

- Chaining promises to avoid increasing levels of indentation when executing consecutive asynchronous function calls. 

- Understanding promise object terminology. states: pending || fulfilled || rejected. *settled* *resolved*.

- Combining multiple promises using Promise.all() syntax || Promise.any().

- async/await. allowing use of try...catch statements to execute asynchronous code by using await keyword, response = await fetch() & await response.json.


## How to implement a promise-based API

- The Promise constructor / using promises (see alarm-clock.html). 


## Introducing workers 

- Single-threaded vs Multi-threaded code:

 - Single-threaded example -  long-running sync function. The program consists of a single, linear thread (set of instructions). If program waiting for sync function to return it cannot do anything else => renders whole window unresponsive.

 - *Workers* allow you to run some tasks in a different thread so you can start a task but also continue with other processing.

 - Main code and worker code should never get direct access to one another's variables. If both threads have access to the same variables, you run the risk of never knowing when your thread will be suspended/the other will be able to run. 

 - Workers and main code should run in separate worlds and only interact by sending each other messages. This means workers can't access the DOM. 

 - The active learning in this repo (workers directory) only covers what's called a *dedicated worker*. There are other types of workers:
	- *Shared workers* - can be shared by several different scripts running in different windows.
	
	- *Service workers* - act like proxy servers, caching resources so that web application can work when the user is offline. They're a key component of Progressive Web Apps.