rightEarX = 0;
rightEarY = 0;

leftEarX = 0;
leftEarY = 0;
function preload()
{

}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    image(video, 0, 0,300,300);
}

function take_snapshot()
{
    save('My_Tracker_Image');
    console.log("Image Taken");
}

function modelLoaded()
{
    console.log("Posnet is initialized")
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("rightEar x = " + results[0].pose.rightEar.x);
        console.log("rightEar y = " + results[0].pose.rightEar.y);
        console.log("leftEar x = " + results[0].pose.leftEar.x);
        console.log("leftEar y = " + results[0].pose.leftEar.y);
    }
}