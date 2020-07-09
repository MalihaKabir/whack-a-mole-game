document.addEventListener('DOMContentLoaded', () => {
	const squares = document.querySelectorAll('.square');
	const mole = document.querySelectorAll('.mole');
	const timeLeft = document.querySelector('#time-left');
	let score = document.querySelector('#score');

	let result = 0;
	let currentTime = timeLeft.textContent;

	// for selecting square randomly
	function randomSquare () {
		// remove the className of mole from all of our squares in the grid
		squares.forEach((className) => {
			className.classList.remove('mole');
		});
		// define a random position on grid by using Math.random() and then multiply by the number of squares we have in the grid. Use floor so that random numbers are under or equivalent to 9.
		let randomPosition = squares[Math.floor(Math.random() * 9)];

		// after defining random position, add the class of '.mole' to it, so the mole appears in the selected grid
		randomPosition.classList.add('mole');

		// assign the id of the randomPosition to hitPosition to use later
		hitPosition = randomPosition.id;
	}

	// write an eventListener for each square to write an if statement
	squares.forEach((id) => {
		id.addEventListener('click', () => {
			// if gamer hit with her mouse and the id of that div is equal to hitPosition, gamer win
			if (id.id === hitPosition) {
				// add 1 point to the result
				result++;
				// then use textContent to visually display the result
				score.textContent = result;
			}
		});
	});

	// moveMole function that will move the mole every so often
	function moveMole () {
		let timerId = null;
		// use setInterval to make the function randomSquare() to run every 1000 mili sec. Change the timing to whatever time you want
		timerId = setInterval(randomSquare, 1000);
	}

	// call the moveMole function
	moveMole();

	// countDown function that makes current time go down by 1 decrementally. If the currentTime which is zero, we've a game over
	function countDown () {
		currentTime--;
		timeLeft.textContent = currentTime;

		if (currentTime === 0) {
			clearInterval(timerId);
			alert(`GAME OVER! Your final score is: ${result}. Refresh the page to play again with timer.`);
		}
	}

	let timerId = setInterval(countDown, 1000);
});
