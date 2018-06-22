var slider = document.getElementById("eyeRange");
var eyeoutput = document.getElementById("eyevalue");
eyeoutput.innerHTML = slider.value; // Display the default slider value
slider.oninput = function() {
    eyeoutput.innerHTML = this.value;
}// Update the current slider value (each time you drag the slider handle)


var slider = document.getElementById("earRange");
var earoutput = document.getElementById("earvalue");
earoutput.innerHTML = slider.value;
slider.oninput = function() {
    earoutput.innerHTML = this.value;
}

var slider = document.getElementById("noseRange");
var noseoutput = document.getElementById("nosevalue");
noseoutput.innerHTML = slider.value;
slider.oninput = function() {
    noseoutput.innerHTML = this.value;
}
var nose = noseoutput;

var slider = document.getElementById("mouthRange");
var mouthoutput = document.getElementById("mouthvalue");
mouthoutput.innerHTML = slider.value;
slider.oninput = function() {
    mouthoutput.innerHTML = this.value;
}


var slider = document.getElementById("heightRange");
var heightoutput = document.getElementById("heightvalue");
heightoutput.innerHTML = slider.value;
slider.oninput = function() {
    heightoutput.innerHTML = this.value;
}


var max_val = 30
var aaa

document.addEventListener('mousedown', function (event) {
    aaa = event
    origin_val = event.target.value
    total_score = parseInt(eyeoutput.innerHTML) + parseInt(earoutput.innerHTML) + parseInt(noseoutput.innerHTML) + parseInt(mouthoutput.innerHTML) + parseInt(heightoutput.innerHTML)
    max_remain = max_val - total_score
    if(max_remain <= 0) {
        max_remain = origin_val
    }
}, false);

document.addEventListener('input', function (event) {
    total_score = parseInt(eyeoutput.innerHTML) + parseInt(earoutput.innerHTML) + parseInt(noseoutput.innerHTML) + parseInt(mouthoutput.innerHTML) + parseInt(heightoutput.innerHTML)
    if(total_score > 30) {
        event.target.value = max_remain
        event.target.parentElement.getElementsByTagName('span')[0].innerHTML = max_remain
    }
}, false);

