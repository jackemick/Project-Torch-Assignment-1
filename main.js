var s1 = "Hello Everyone!";
var s2 = "My name is Jack Micklus";

document.addEventListener("DOMContentLoaded", function() {
    blinkCursor();
});
var i = 0;
var j = 0;
var z = 0;
var speed = 100;
var cursor_speed = 500;
var text = "";
var looped = 0;
function typeWriter() {
        if (i < s1.length) {
            text += s1.charAt(i);
            document.getElementById("heading").innerHTML ="<span id='bracket'>&lt;</span><span id='head'>h1</span><span id='bracket'>&gt;</span> " + text + "<span id='cursor'>|</span>" + "<span id='bracket'>&lt;</span><span id='head'>/h1</span><span id='bracket'>&gt;</span>";
            i++;
            setTimeout(typeWriter, speed);
        }
        else {
            looped += 1;
            blinkCursor();    
        }
    }

function blinkCursor() {
    if (j < 6 & j % 2 == 0) {
        document.getElementById("cursor").style.color = "#222222";
        j++;
        setTimeout(blinkCursor, cursor_speed);
    }
    else if (j < 6 & j % 2 != 0) {
        document.getElementById("cursor").style.color = "#ececec";
        j++;
        setTimeout(blinkCursor, cursor_speed);
    }
    else if (looped == 0){
        j = 0;
        typeWriter();
    }
    else if (looped == 1) {
        j = 0;
        typeClear();
    }
    else if (looped == 2) {
        j = 0;
        typeWriter2();
    }
    else {
        document.getElementById("cursor").style.color = "#222222";
        document.getElementById("icon").style.display = "block";
    }
}

function typeClear() { 
    if (text.length > 0) {
        text = text.slice(0, -1);
        document.getElementById("heading").innerHTML ="<span id='bracket'>&lt;</span><span id='head'>h1</span><span id='bracket'>&gt;</span>" + text + "<span id='cursor'>|</span>" + "<span id='bracket'>&lt;/</span><span id='head'>h1</span><span id='bracket'>&gt;</span>";
        setTimeout(typeClear, 25);
    }
    else {
        looped += 1;
        blinkCursor();
    }   
}

function typeWriter2() {
    if (z < s2.length) {
        text += s2.charAt(z);
        document.getElementById("heading").innerHTML ="<span id='bracket'>&lt;</span><span id='head'>h1</span><span id='bracket'>&gt;</span> " + text + "<span id='cursor'>|</span>" + "<span id='bracket'>&lt;</span><span id='head'>/h1</span><span id='bracket'>&gt;</span>";
        z++;
        setTimeout(typeWriter2, speed);
    }
    else {
        looped += 1;
        blinkCursor();    
    }
}