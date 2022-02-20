const cards = document.querySelectorAll('.card');
const move = document.querySelector('.moves')
const mwin = document.querySelector('.moves-win')
const win = document.querySelector('.win')

let flipped = false;
let lock = false;
let first, second;

let matchs = 0;
let mov = 0;

var theme = new Audio();
theme.preload = 'auto';
theme.src = 'js30-memory-game/assets/theme.mp3';
theme.play();
theme.loop = -1;


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
		audio.src = 'js30-memory-game/assets/fb.mp3';
		audio.play();
	}
	if (matchs === 2) {
		var audio = new Audio();
		audio.preload = 'auto';
		audio.src = 'js30-memory-game/assets/dk.mp3';
		audio.play();
	}
	if (matchs === 3) {
		var audio = new Audio();
		audio.preload = 'auto';
		audio.src = 'js30-memory-game/assets/tk.mp3';
		audio.play();
	}
	if (matchs === 4) {
		var audio = new Audio();
		audio.preload = 'auto';
		audio.src = 'js30-memory-game/assets/uk.mp3';
		audio.play();
	}
	if (matchs === 5) {
		var audio = new Audio();
		audio.preload = 'auto';
		audio.src = 'js30-memory-game/assets/rp.mp3';
		audio.play();
	}
	if (matchs === 6) {
		var audio = new Audio();
		audio.preload = 'auto';
		audio.src = 'js30-memory-game/assets/k6.mp3';
		audio.play();
	}
	if (matchs === 7) {
		var audio = new Audio();
		audio.preload = 'auto';
		audio.src = 'js30-memory-game/assets/k7.mp3';
		audio.play();
	}
	if (matchs === 8) {
		var audio = new Audio();
		audio.preload = 'auto';
		audio.src = 'js30-memory-game/assets/k8.mp3';
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