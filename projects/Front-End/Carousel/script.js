// Variables on carousel
let	prevBtn = document.querySelector(".prev_btn"),
	nextBtn = document.querySelector(".next_btn"),

	// Scroll Objects
	slideDefault = document.querySelector(".slide"),
	slideScroll = document.querySelector(".scroll"),

	// Control Variables
	currentIndex = 0,
	carousel = document.querySelectorAll(".slide"),
	max = carousel.length
;

// Start Carousel with first slide selected
carousel[0].className = "slide selected";

// Previous Slide Button
prevBtn.addEventListener("click", function() {
carousel[currentIndex].className = "slide not_selected";

if(currentIndex <= max && currentIndex > 0)
	currentIndex--
else
	if(currentIndex == 0)
		currentIndex = max - 1;

carousel[currentIndex].className = "slide selected";
});

// Next Slide Button
nextBtn.addEventListener("click", function() {
carousel[currentIndex].className = "slide not_selected";

currentIndex++;

if (currentIndex >= max)
	currentIndex = 0;

carousel[currentIndex].className = "slide selected";
});
