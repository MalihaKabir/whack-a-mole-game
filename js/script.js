document.addEventListener('DOMContentLoaded', () => {
	const startBtn = document.querySelector('#start-btn');
	const scoreTag = document.querySelector('#score');
	const timerID = document.querySelector('#timer-id');
	const smallGrids = document.querySelectorAll('.small-grid');
	let score = 0;
	let setTimerID = 60;
	timerID.textContent = setTimerID;
	let timeLeft = timerID.textContent;
	let timerMole = null;
	let timeCount = null;
	let divIdThatGetHit = 0;

	function startGame () {
		score = 0;
		scoreTag.textContent = score;
		clearInterval(timerMole);
		clearInterval(timeCount);
		setTimerID = 60;
		timerID.textContent = setTimerID;
		timeLeft = timerID.textContent;
		timerMole = null;
		timeCount = null;
		divIdThatGetHit = 0;
		callAccordingToTimer();
	}

	function selectDivRandomly () {
		const lengthOfGrid = smallGrids.length;

		smallGrids.forEach((smallGrid, i) => {
			smallGrid.classList.remove('mole');
			smallGrid.id = i;
		});

		let randomDiv = smallGrids[Math.floor(Math.random() * lengthOfGrid)];
		randomDiv.classList.add('mole');
		divIdThatGetHit = randomDiv.id;

		if (timeLeft === 0) randomDiv.classList.remove('mole');
	}

	smallGrids.forEach((divThatGetHit) => {
		divThatGetHit.addEventListener('click', () => {
			if (divThatGetHit.id === divIdThatGetHit) {
				score += 10;
				scoreTag.textContent = score;
			}
		});
	});

	function countDown () {
		timeLeft--;
		timerID.textContent = timeLeft;
		if (timeLeft === 0) {
			clearInterval(timeCount);
			startBtn.removeEventListener('click', callAccordingToTimer);
			alert('Game Over!');
			startBtn.addEventListener('click', startGame);
		}
	}

	function callAccordingToTimer () {

			timerMole ? (timerMole = null) :
			(timerMole = setInterval(selectDivRandomly, 500));


			timeCount ? null :
			(timeCount = setInterval(countDown, 1000));

		startBtn.removeEventListener('click', startGame);
	}

	startBtn.addEventListener('click', startGame);
});
