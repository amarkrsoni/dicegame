var rnum=Math.random()*6;
var rnum=Math.floor(rnum)+1;
var r="images/dice"+rnum+".png";
document.querySelectorAll("img")[0].setAttribute("src",r);
var rnum2=Math.random()*6;
var rnum2=Math.floor(rnum2)+1;
var r2="images/dice"+rnum2+".png";

document.querySelectorAll("img")[1].setAttribute("src",r2);
if(rnum>rnum2)
{
  document.querySelector("h1").innerHTML="player 1 wins !!";
}
else if(rnum<rnum2)
{
  document.querySelector("h1").innerHTML="player 2 wins !!";
}
else {
document.querySelector("h1").innerHTML="draw !!";
}
