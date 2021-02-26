Webcam.set({
    width: 350,
    hight: 350,
    image_format: 'png',
    png_quantity: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    })
}

console.log('ml5 version:', ml5.version);
var url = "https: //teachablemachine.withgoogle.com/models/Y6LA9qo_p/";
classifier = ml5.imageClassifier(url, modelLoad);

function modelLoad() {
    console.log('Model Loaded!');
}