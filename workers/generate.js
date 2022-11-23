// worker code.	source:	https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing_workers.
	//	this	script	runs	as	soon	as	the	main	script	creates	the	worker.

		// Listen for messages from the main thread	using	addEventListener(),	which	is	actually	a	global	function	in	a	worker.
			// If the message command is "generate", call `generatePrimes()`
addEventListener('message', (message) => {
	if (message.data.command === 'generate') {
			generatePrimes(message.data.quota);
	}
});

// Generate primes (very inefficiently)
function generatePrimes(quota) {

	function isPrime(n) {
			for (let c = 2; c <= Math.sqrt(n); ++c) {
					if (n % c === 0) {
									return false;
						}
			}
			return true;
	}

	const primes = [];
	const maximum = 1000000;

	while (primes.length < quota) {
			const candidate = Math.floor(Math.random() * (maximum + 1));
			if (isPrime(candidate)) {
					primes.push(candidate);
			}
	}

	// When we have finished,	instead	of	returning	a	value	like	in	synchronous	version,	send a message to the main thread,
	// including the number of primes we generated.
		//	Main	script	is	listening	for	this	message	and	will	update	the	DOM	when	the	message	is	received.
	postMessage(primes.length);
}