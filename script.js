const root = document.documentElement;
const backgroundImg = document.getElementById("top");

const frontCloudRate = 0.5;
const backCloudRate = 0.2;

setInterval(moveClouds, 10);

function moveClouds() {
    let frontClouds = parseFloat(getComputedStyle(root).getPropertyValue('--front-clouds'));
    let backClouds = parseFloat(getComputedStyle(root).getPropertyValue('--back-clouds'));

    frontClouds += frontCloudRate;
    backClouds += backCloudRate;

    if (frontClouds >= 600) {
        frontClouds = 0;
    }
    if (backClouds >= 600) {
        backClouds = 0;
    }

    root.style.setProperty('--front-clouds', frontClouds + "px");
    root.style.setProperty('--back-clouds', backClouds + "px");
}