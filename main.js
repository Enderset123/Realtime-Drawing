var noseX,noseY,leftWristX,rightWristX,difference;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,100);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}
function modelLoaded(){

    console.log("PoseNet Is Intiailized");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX= "+noseX+"noseY= "+noseY);
        
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log("leftWristX= "+leftWristX+"rightWristX= "+rightWristX+"difference= "+difference);
    }
}
function draw(){
    background("#969A97")
    document.getElementById("square_side").innerHTML="Width And Height Of Square Will Be : "+difference+"px";
    fill("lime");
    stroke("cyan");
    square(noseX,noseY,difference)
}