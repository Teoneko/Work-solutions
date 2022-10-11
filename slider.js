function addSlider() {
	const sliderContains = document.querySelectorAll('.slider');
	for (let sliderContain of sliderContains) {
		let sliderPrev = sliderContain.querySelector('.slider-prev');
		let sliderNext = sliderContain.querySelector('.slider-next');
		let slider = sliderContain.querySelector('.slider>ul');
		let isDown = false;
		let startX;
		let scrollLeft;
		let isUpTimer;
		let isUp = true;
		let clickButton;

		slider.addEventListener('mousedown', (e) => {
			isDown = true;
			isUpTimer = setTimeout(function () {
				return isUp = false
			}, 200);
			startX = e.pageX - slider.offsetLeft;
			scrollLeft = slider.scrollLeft;
		});
		slider.addEventListener('mouseleave', () => {
			isDown = false;
		});
		slider.addEventListener('mouseup', () => {
			isDown = false;
			clearTimeout(isUpTimer);
			setTimeout(function () {
				isDown || (isUp = true)
			}, 1)
		});
		slider.addEventListener('mousemove', (e) => {
			if (!isDown) return;
			e.preventDefault();
			const x = e.pageX - slider.offsetLeft;
			const walk = (x - startX) * 3; //scroll-speed
			slider.scrollLeft = scrollLeft - walk;
		});
		slider.querySelectorAll("*").forEach(function (e) {
			e.addEventListener("mousedown", function (e) {
				e.preventDefault()
			});
			e.addEventListener("click", function (e) {
				isUp || e.preventDefault()
			});
		});
		sliderNext.addEventListener('pointerdown', function (e) {
			clickButton = setInterval(function () {
				slider.scrollLeft += 5; //scroll-speed
			}, 0);
		});
		sliderNext.addEventListener('touchstart', function (e) {
			e.preventDefault();
		}, { passive: false })
		sliderNext.addEventListener('pointerup', function () {
			clearInterval(clickButton);
		});
		sliderNext.addEventListener('pointerleave', function () {
			clearInterval(clickButton);
		});
		sliderPrev.addEventListener('pointerdown', function (e) {
			clickButton = setInterval(function () {
				slider.scrollLeft -= 5;
			}, 0);
		});
		sliderPrev.addEventListener('touchstart', function (e) {
			e.preventDefault();
		}, { passive: false })
		sliderPrev.addEventListener('pointerup', function () {
			clearInterval(clickButton);
		});
		sliderPrev.addEventListener('pointerleave', function () {
			clearInterval(clickButton);
		});
	}
}

function addSliderWithDelay() {
	setTimeout(addSlider, 500);
}

window.addEventListener('load', addSliderWithDelay);