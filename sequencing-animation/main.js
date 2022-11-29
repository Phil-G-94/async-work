const aliceTumbling = [
	{ transform: 'rotate(0) scale(1)' },
	{ transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
	duration: 2000,
	iterations: 1,
	fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");
const alice4 = document.querySelector("#alice4");
const alice5 = document.querySelector("#alice5");
const alice6 = document.querySelector("#alice6");

// call to animate alice1 using Web Animations API, causes first alice image to spin and disappear
// the animate() method returns an Animation object. This object has a finished property, which is a Promise
// that is fulfilled when the animation has finished playing.

/*
Promise Chain
> call animate() method on alice1 element, creating a new Animation object instance that returns property .finished. .finished is a Promise that is fulfilled when the animation is complete. 
 > if the .finished Promise is fulfilled from alice1.animate() then call the animate() method on alice2.
	> repeat for alice3.
	 > catch error in case .finished Promise is rejected.
		> 
*/
/*
alice1.animate(aliceTumbling,	aliceTiming).finished
 .then(() => alice2.animate(aliceTumbling, aliceTiming).finished)
 .then(() => alice3.animate(aliceTumbling, aliceTiming).finished)
 .catch(error => console.error(`Error animating Alices: ${error}`));
*/

/*
using async/await 
	catch	for	error	handling

*/
async function animatingAlice() {
	try {
		await alice1.animate(aliceTumbling, aliceTiming).finished
		await alice2.animate(aliceTumbling, aliceTiming).finished
		await alice3.animate(aliceTumbling, aliceTiming).finished
    await alice4.animate(aliceTumbling, aliceTiming).finished
    await alice5.animate(aliceTumbling, aliceTiming).finished
    await alice6.animate(aliceTumbling, aliceTiming).finished;
	}

	catch (error) {
		console.error(`Could not animate Alice: ${error}`);
	}
}

//	function	call	starts	animation. 
animatingAlice();