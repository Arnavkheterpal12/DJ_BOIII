song="";
function preload(){
    song=loadSound("Imagine Dragons - Believer.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO,600,500);
    video.hide();

}
function draw(){
    image(video,0,0,600,500);
}
function play(){
    song.play(song);
}