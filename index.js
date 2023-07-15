var randomnumber1 = Math.ceil(Math.random() * 6);
var randomimage = "dice" + randomnumber1 + ".png";
var imgsrc = "images/" + randomimage;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", imgsrc);
var randomnumber2 = Math.ceil(Math.random() * 6);
var randomimage2 = "dice" + randomnumber2 + ".png";
var imgsrc2 = "images/" + randomimage2;
document.querySelectorAll("img")[1].setAttribute("src", imgsrc2);

if(randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if(randomnumber1 < randomnumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}

