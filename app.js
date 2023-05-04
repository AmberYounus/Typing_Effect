var i = 0;
var txt = 'its a type writer to show a content and its speed is 50';
var speed = 50;

function typeWriter() {
    if(i < txt.length){
        document.getElementById("effect").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter,speed);
    }
}