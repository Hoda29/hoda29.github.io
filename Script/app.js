const arrow = document.querySelector(".arrow");
const movieLists = document.querySelector(".movie-list");
const itemNumber = 7;
let clickCounter=0;
const ratio= Math.floor(window.innerWidth/230);// gets ratio of page depending on its width/pic width

arrow.addEventListener("click",() => { // determines the number of clicks for the button
        clickCounter++;
        if(itemNumber - (4 + clickCounter) + (5 - ratio)>= 0){           
        movieLists.style.transform = `translateX(${movieLists.computedStyleMap().get("transform")[0].x.value -230}px)`; 
        }
        else{
            movieLists.style.transform = "translateX(0)";
            clickCounter = 0;
        }
});

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle-icon,.shown-content,.logo,.left-menu-button,.search-button,.arrowdown,.fa-angle-down,.fa-magnifying-glass")

ball.addEventListener("click",() =>{//lightmode/darkmode toggle
    items.forEach(item=>{
        item.classList.toggle("active");
    })
    ball.classList.toggle("active");
})
function topscrl(){
    document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0
}
function dispprofile(){
    document.getElementById("profile-info").classList.toggle("show-profile");
}
function dispusers(){
    document.getElementById("devs").classList.toggle("show-profile");
}
function dispphone(){
    document.getElementById("number").classList.toggle("show-profile");
}
document.getElementById("home").onclick = function() {topscrl()};
document.getElementById("arrowdown").onclick = function() {dispprofile()}
document.getElementById("users").onclick = function() {dispusers()}
document.getElementById("phone").onclick = function() {prompt("Our Phone is +020123423232 , Please enter yours:")}
document.getElementById("bookmark").onclick = function() {alert("Bookmark our page to visit us again")};