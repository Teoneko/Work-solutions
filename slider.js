const sliderContains = document.querySelectorAll('.slider-contain');
for (let sliderContain of sliderContains) {
	let sliderPrev = sliderContain.querySelector('.slider-prev');
	let sliderNext = sliderContain.querySelector('.slider-next');
	let slider = sliderContain.querySelector('.slider');
	let isDown = false;
	let startX;
	let scrollLeft;
	let isUpTimer = null;
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
		const walk = (x - startX) * 3; //scroll-fast
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
	sliderNext.addEventListener('pointerdown', function next(){
		slider.scrollLeft += 5;
		clickButton = setTimeout(next, 0);
	});
	sliderNext.addEventListener('touchstart', function(e){
		e.preventDefault();
	})
	sliderNext.addEventListener('pointerup', function(){
		clearTimeout(clickButton);
	});
	sliderNext.addEventListener('pointerleave', function(){
		clearTimeout(clickButton);
	});
	sliderPrev.addEventListener('pointerdown', function prev(){
		slider.scrollLeft -= 5;
		clickButton = setTimeout(prev, 0);
	});
	sliderPrev.addEventListener('touchstart', function(e){
		e.preventDefault();
	})
	sliderPrev.addEventListener('pointerup', function(){
		clearTimeout(clickButton);
	});
	sliderPrev.addEventListener('pointerleave', function(){
		clearTimeout(clickButton);
	});
}