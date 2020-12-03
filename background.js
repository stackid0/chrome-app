const bodyBackground = document.querySelector("body");

const backgroundList = ["66023124_p0.jpg", "73531546_p0.jpg", "78127150_p0.png", "78236624_p0.png", "85970602_p0.png"];
const IMG_NUMBER = 5;

function paintImage(imgSrc) {
    const image = new Image();
    image.src = `img/${imgSrc}`;
    bodyBackground.prepend(image);
    image.classList.add("background-img");
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomSrc = backgroundList[genRandom()];
    paintImage(randomSrc);
}

init();