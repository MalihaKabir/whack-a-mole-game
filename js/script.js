document.addEventListener('DOMContentLoaded', () => {
	const startBtn = document.querySelector('#start-btn');
	// const mainGrid = document.querySelector('.grid');
	const scoreTag = document.querySelector('#score');
	const timerID = document.querySelector('#timer-id');
	const smallGrids = document.querySelectorAll('.small-grid');
	let score = 0;
	let timerMole = null;
	let timeCount = null;
	let timeLeft = timerID.textContent;
	const lengthOfGrid = smallGrids.length;
	let divIdThatGetHit = 1;

	function grabSmallGridsRandomly () {
		smallGrids.forEach((smallGrid, i) => {
			smallGrid.classList.remove('mole');
			smallGrid.id = i;
		});
		let randomDiv = smallGrids[Math.floor(Math.random() * lengthOfGrid)];
		randomDiv.classList.add('mole');
		divIdThatGetHit = randomDiv.id;

		if (timeLeft === 0) randomDiv.classList.remove('mole');
	}

	smallGrids.forEach((div) => {
		div.addEventListener('click', () => {
			if (div.id === divIdThatGetHit) {
				score++;
				scoreTag.textContent = score;
			}
		});
	});

	function countDown () {
		timeLeft--;
		if (timeLeft === 0) {
			clearInterval(timeCount);
			alert('Game Over! Refresh the page to play again.');
			startBtn.removeEventListener('click', moveMole);
		}
		timerID.textContent = timeLeft;
	}

	function moveMole () {

			timerMole ? (timerMole = null) :
			(timerMole = setInterval(grabSmallGridsRandomly, 500));


			timeCount ? (timeCount = null) :
			(timeCount = setInterval(countDown, 1000));
	}

	startBtn.addEventListener('click', moveMole);
});
