
function reveal8() {
var x8 = document.getElementById('eight');

if (x8.style.display == "none" || x8.style.display == '') {
x8.style.display = "block";
} else {
x8.style.display = "none";
}
}

function reveal7() {
var x7 = document.getElementById('seven');

if (x7.style.display == "none" || x7.style.display == '') {
x7.style.display = "block";
} else {
x7.style.display = "none";
}
}

function reveal6() {
var x6 = document.getElementById('six');

if (x6.style.display == "none" || x6.style.display == '') {
x6.style.display = "block";
} else {
x6.style.display = "none";
}
}

function reveal5() {
var x5 = document.getElementById('five');

if (x5.style.display == "none" || x5.style.display == '') {
x5.style.display = "block";
} else {
x5.style.display = "none";
}
}

function reveal4() {
var x4 = document.getElementById('four');

if (x4.style.display == "none" || x4.style.display == '') {
x4.style.display = "block";
} else {
x4.style.display = "none";
}
}

function reveal3() {
var x3 = document.getElementById('three');

if (x3.style.display == "none" || x3.style.display == '') {
x3.style.display = "block";
} else {
x3.style.display = "none";
}
}


function reveal2() {
var x2 = document.getElementById('two');

if (x2.style.display == "none" || x2.style.display == '') {
x2.style.display = "block";
} else {
x2.style.display = "none";
}
}


function reveal1() {
var x1 = document.getElementById('one');

if (x1.style.display == "none" || x1.style.display == '') {
x1.style.display = "block";
} else {
x1.style.display = "none";
}
}

$(document).ready(function() {
$('#dropEight').click(function() {
  $(this).toggleClass('rotate');
});
$('#dropSeven').click(function() {
  $(this).toggleClass('rotate');
});
$('#dropSix').click(function() {
  $(this).toggleClass('rotate');
});
$('#dropFive').click(function() {
  $(this).toggleClass('rotate');
});
$('#dropFour').click(function() {
  $(this).toggleClass('rotate');
});
$('#dropThree').click(function() {
  $(this).toggleClass('rotate');
});
$('#dropTwo').click(function() {
  $(this).toggleClass('rotate');
});
$('#dropOne').click(function() {
  $(this).toggleClass('rotate');
});
});
