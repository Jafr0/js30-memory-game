const cards = document.querySelectorAll('.card');
const move = document.querySelector('.moves')
const mwin = document.querySelector('.moves-win')
const win = document.querySelector('.win')
const play = document.querySelector('.play')
const start = document.querySelector('.start')

let flipped = false;
let lock = false;
let first, second;

let matchs = 0;
let mov = 0;

play.addEventListener('click', game)



function game() {

	start.classList.add('show')

	var theme = new Audio();
	theme.preload = 'auto';
	theme.src = 'assets/theme.mp3';
	theme.loop = -1;
	theme.volume = 0.3;
	theme.play();


	function flip() {


		if (lock) return;
		if (this === first) return;

		this.classList.add('flip');

		if (!flipped) {
			flipped = true;
			first = this;
			return;
		}

		second = this;
		lock = true;

		let check = first.dataset.hero === second.dataset.hero;
		check ? hold() : unflip();

	}



	function hold() {

		first.removeEventListener('click', flip);
		second.removeEventListener('click', flip);
		matchs++
		mov++
		move.innerHTML = mov
		if (matchs === 8) {
			mwin.innerHTML = mov
			win.classList.add('show')

		}
		if (matchs === 1) {
			var audio = new Audio();
			audio.preload = 'auto';
			audio.src = 'assets/fb.mp3';
			audio.play();
		}
		if (matchs === 2) {
			var audio = new Audio();
			audio.preload = 'auto';
			audio.src = 'assets/dk.mp3';
			audio.play();
		}
		if (matchs === 3) {
			var audio = new Audio();
			audio.preload = 'auto';
			audio.src = 'assets/tk.mp3';
			audio.play();
		}
		if (matchs === 4) {
			var audio = new Audio();
			audio.preload = 'auto';
			audio.src = 'assets/uk.mp3';
			audio.play();
		}
		if (matchs === 5) {
			var audio = new Audio();
			audio.preload = 'auto';
			audio.src = 'assets/rp.mp3';
			audio.play();
		}
		if (matchs === 6) {
			var audio = new Audio();
			audio.preload = 'auto';
			audio.src = 'assets/k6.mp3';
			audio.play();
		}
		if (matchs === 7) {
			var audio = new Audio();
			audio.preload = 'auto';
			audio.src = 'assets/k7.mp3';
			audio.play();
		}
		if (matchs === 8) {
			var audio = new Audio();
			audio.preload = 'auto';
			audio.src = 'assets/k8.mp3';
			audio.play();
		}


		reset();


	}

	function unflip() {
		setTimeout(() => {
			first.classList.remove('flip');
			second.classList.remove('flip');

			reset();
		}, 1500);
		mov++
		move.innerHTML = mov


	}

	function reset() {
		[flipped, lock] = [false, false];
		[first, second] = [null, null];
	}

	(function randomCard() {
		cards.forEach(card => {
			let ramdom = Math.floor(Math.random() * 12);
			card.style.order = ramdom;
		});
	})();




	const btn = document.querySelector('.reset')

	function resetGame() {



		if (cards.length > 0) {
			cards.forEach(card => {
				card.classList.remove('flip')

			});
		}
		(function randomCard() {
			cards.forEach(card => {
				let ramdom = Math.floor(Math.random() * 12);
				card.style.order = ramdom;

			});
		})();
		win.classList.remove('show')
		matchs = 0
		mov = 0
		move.innerHTML = mov
		cards.forEach(card => card.addEventListener('click', flip));

	}

	btn.addEventListener('click', resetGame)


	cards.forEach(card => card.addEventListener('click', flip));
}

console.log("Самооценка в 60 баллов\nВёрстка +10\nЛогика игры +10\nИгра завершается, когда открыты все карточки +10\nРезультат +10\nПереворот карт +10\n Доп функционал (Старт, Окно выигрыша, Звуки) +10")