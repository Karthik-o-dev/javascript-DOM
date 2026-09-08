const video = document.getElementById("video");
video.style.display = "block";

const play = () => {
    video.play();
    console.log("play")
}

const pause = () => {
    video.pause();
    console.log("Pause")
}

const restart = () => {
    video.currentTime = 0;
    console.log("restart")
}
const backward = () => {
    video.currentTime -= 10;
    console.log("backward")
}

const forward = () => {
    video.currentTime += 10;
    console.log("forward");
}