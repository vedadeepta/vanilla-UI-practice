const overlay = document.getElementById('overlay');

function openModal(e){
	e.preventDefault();
	e.stopPropagation();
  overlay.classList.remove("is-hidden");
}

function closeModal(e){
	if (e.target.id === 'overlay' || e.target.id === 'close-button' || e.keyCode === 27) {
	  overlay.classList.add("is-hidden");
	}
}

export {
	openModal,
	closeModal
};