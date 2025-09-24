document.addEventListener("DOMContentLoaded", function () {
	const imgs = [
		document.querySelector('img[src*="daniel.png"]'),
		document.querySelector('img[src*="leonardo.png"]'),
		document.querySelector('img[src*="ante.png"]'),
		document.querySelector('img[src*="joža.png"]')
	].filter(Boolean);
	if (!imgs.length) return;
	let i = 0;
	function animateWave() {
		imgs.forEach((img, idx) => {
			img.style.transition = "transform 0.7s cubic-bezier(.4,2,.6,1)";
			if (idx === i) {
				img.style.transform = "scale(1.13)";
			} else {
				img.style.transform = "scale(1)";
			}
		});
		i = (i + 1) % imgs.length;
	}
	setInterval(animateWave, 700);
});
