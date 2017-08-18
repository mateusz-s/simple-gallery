var url = "http://lorempixel.com/640/480/abstract/",
	i = 1,
	n = 10,
	prevBtn = document.getElementById("prev"),
	nextBtn = document.getElementById("next"),
	galleryImg = document.getElementById("photo"),
	galleryText = document.getElementById("text");

function prevImg() {
	i--;
	if (i < 1) {
		i = n;
	}
	galleryImg.src = url + i;
	galleryText.innerHTML = i + " of " + n;
}

function nextImg() {
	i++;
	if (i > n) {
		i = 1;
	}
	galleryImg.src = url + i;
	galleryText.innerHTML = i + " of " + n;
}

galleryText.innerHTML = i + " of " + n;