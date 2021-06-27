 function bt() {
var p1 = Math.floor(Math.random() * 6) + 1;
var p2 = Math.floor(Math.random() * 6) + 1;


title = "";



if (p1 === p2) {
    title = "Draw";
} else if (p1 > p2) {
    title = "Player 1 won";
}
else {
    title = "Player 2 won";
}

document.querySelector(".title").innerHTML = title;

document.querySelector(".p1 img").setAttribute("src","images/dice"+p1+".png");
document.querySelector(".p2 img").setAttribute("src","images/dice"+p2+".png");


}