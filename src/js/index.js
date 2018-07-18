import { openModal, closeModal } from './modal.js'

function main() {
	const modalButton = document.getElementById('modal-button');
	const overlay = document.getElementById('overlay');

	modalButton.addEventListener('click', openModal);
	overlay.addEventListener('click', closeModal);
	window.addEventListener('keydown', closeModal);

	console.log('listeners added');
}

main();