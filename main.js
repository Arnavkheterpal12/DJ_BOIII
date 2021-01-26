song="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
scoreLeftWrist=0;
scoreRightWrist=0;
function preload(){
    song=loadSound("music.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO,600,500);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,600,500);
        if(scoreRightWrist>0.2){
             fill('#32CD32');
             stroke('#32CD32');
             circle(rightWristX,rightWristY,20);
             if(rightWristX >0 && rightWristY <= 100){
                document.getElementById("speed").innerHTML="Speed=0.5x";
                song.rate(0.5);
              }
              else if(rightWristX >0 && rightWristY <= 100){
                  document.getElementById("speed").innerHTML="Speed= 1x";
                  song.rate(1);
                }
                else if(rightWristX >0 && rightWristY <= 100){
                  document.getElementById("speed").innerHTML="Speed= 1.5x";
                  song.rate(1.5);
                }
                else if(rightWristX >0 && rightWristY <= 100){
                  document.getElementById("speed").innerHTML="Speed= 2x";
                  song.rate(2);
                }
                else if(rightWristX >0 && rightWristY <= 100){
                  document.getElementById("speed").innerHTML="Speed= 2.5x";
                  song.rate(2.5);
                }
        }
        
        
    
    if(scoreLeftWrist>0.2){
        fill('#32CD32');
        stroke('#32CD32');
        circle(leftWristX,leftWristY,20);
        InNumberLeftWristY=Number(leftWristY);
        remove_decimals=floor(InNumberLeftWristY);
        volume=remove_decimals/500;
        document.getElementById('volume').innerHTML="Volume =" + volume;
        song.setVolume(volume);
    }
}
function play(){
    song.play(song);
    song.setVolume(1);
    song.rate(1);
}
function modelLoaded(){
    console.log('pose net is initialized');
}
function gotPoses(results){
   if (results.length>0){
       console.log(results);
       scoreLeftWrist=results[0].pose.keypoints[9].score;
       console.log("Score Left Wrist="+scoreLeftWrist);
       scoreRightWrist=results[0].pose.keypoints[10].score;
       console.log("Score Right Wrist="+scoreRightWrist);
       leftWristX=results[0].pose.leftWrist.x;
       leftWristY=results[0].pose.leftWrist.y;
       rightWristX=results[0].pose.rightWrist.x;
       rightWristY=results[0].pose.rightWrist.y;
       console.log('left wrist x='+leftWristX+'left wrist y='+leftWristY+'right wrist x='+rightWristX+'right wrist y='+rightWristY);
   }
}