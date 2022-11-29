/*

// call fetch API, providing the URL of the resource you'd like to fetch. assign the value of this to fetchPromise variable. 
const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

// this outputs Promise {state}, telling you you have a Promise object, and it has a state whose value is "pending"
console.log(fetchPromise);

// passing a handler into the .then method of the returned promise (fetchPromise).
 // when & if the fetch operation succeeds, the promise will call our handler, passing in a Response object which contains the server response. 
fetchPromise.then((response) => {
 console.log(`Promise response: ${response.status}`);
})

// log a message that we've started the request 
console.log("Started request...")

 
Output: 

Promise { <pending> }
Started request...
Promise response: 200

*/

/*

// Rewritten using the .then method of the Promise object 

const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise.then((response) => {
 const jsonPromise = response.json();
 jsonPromise.then((data) => {
	console.log(data[0].name)
 })
})

// Output: baked beans || name of first product listed in "products.json"

*/


/*

// Rewriten using promise chaining  
 // Removed the call to second .then from inside the handler to first .then (see above)
	// Instead, the below returns the promise returned by json() and call the second .then on that return value

const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise
 .then((response) => response.json())
 .then((data) => {
	console.log(data[0].name);
 });

*/ 


/*
// Rewriten using promise chaining, throw error handling and catching 

const fetchPromise = fetch('bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise
 .then((response) => {

	// throws new Error if ok property of response interface isn't true/if the response wasn't succesful. else returns response.json. 
	if (!response.ok) {
	 throw new Error(`HTTP error: ${response.status}`);
	}
	return response.json();
 })
 .then((data) => {
	console.log(data[0].name)
 })

 // logs error when the promise is rejected. calls the catch() handler, 
 .catch((error) => {
	console.error(`Could not get products: ${error}`);
 });

*/ 

/*
using Promise.all() || Promise.any()

const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'); // 200
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found'); // 404
const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json'); // 200
// const fetchPromise4 = fetch();

// call Promise.all method, passing in three fetch() requests as array iterables
 // call .then method to take in responses, use for...of loop to iterate through individual responses and log them to the console. 
Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
 .then((responses) => {
	for(const response of responses) {
	 console.log(`${response.url}: ${response.status}`);
	}
 })
 .catch((error) => {
	console.error(`Failed to fetch: ${error}`);
 }); 

 Promise.any() works similarly except that it is fulfilled as soon as any of the promises is fulfilled or rejected if all of them are rejected. 

*/

// async and await
 
 // adding async keyword before function declaration makes that function asynchronous.
	// enables us to write code that uses asynchronous functions but looks like synchronous code. 
	 // allows use of try...catch block for error handling.
		// you can only use await inside an async function *unless* your code is in a JavaScript Module.  
		 // just like a promise chain, awaits forces asynchronous operations to be completed in series. 

 async function fetchProducts() {

	try {

	 const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

	 if (!response.ok) {
		throw new Error(`HTTP error: ${response.status}`)
	 }

	 const data = await response.json();

	 console.log(data[0].name)
	}
	catch (error) {
	 console.error(`Could not get products: ${error}`);
	}
 }

fetchProducts();

