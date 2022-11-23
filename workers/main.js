//	main	code

//	create	new worker,	passing in the url pointing to the worker script	generate.js							

const	worker	=	new	Worker('./generate.js');

//	When	user	clicks	"Generate	primes",	send	a	message	to	the	worker using the .postMessage() method of the worker interface.
	//	The	message	command	is	"generate",	and	the	message	also	contains	"quota",	
		//	which	is	the	number	of	primes	to	generate.	

document.querySelector('#generate').addEventListener('click',	()	=>	{
	const	quota	=	document.querySelector('#quota').value;

// the	.postMessage()	method	of	worker	interface	takes	one	parameter	-	which	is	the	data	to	send	to	the	worker.
	//	in	this	case	we	are	passing	a	JSON	object	{}	with	two	properties,	command	&	quota.
		//	command:	a	string	identifying	the	thing	we	want	the	worker	to	do.
			//	quota:	the	number	of	primes	to	generate.
	worker.postMessage({
		command:	'generate',
		quota
	});
});

//	when	worker	sends	a	messaage	back	to	the	main	thread
	//	update	the	output	box	with	a	message	for	the	user,	including	the	number	of	primes	that	were	generated,	taken	from	the	message	data.
		//	we	use	a	'message'	event	handler	so	the	worker	can	tell	us	when	it	has	finished,	and	pass	us	any	resulting	data.
			//	the	handler	takes	the	data	property	of	the	message	and	writes	it	to	the	output	element
	worker.addEventListener('message',	(message)	=>	{
		document.querySelector('#output').textContent	=	`Finished	generating	${message.data}	primes.`;
	});


//	implement	click	event	handler	for	the	"Reload"	button
	document.querySelector('#reload').addEventListener('click',	()	=>	{
		document.querySelector('#user-input').value	=	'Try typing in here immediately after pressing "Generate primes"';
		document.location.reload()
	})