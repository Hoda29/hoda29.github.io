var myButton = document.getElementById('pass-toggle'),
    myInput = document.getElementById('pass-id');
myButton.onclick = function () {
  e.preventDefault();
  if (this.textContent == 'Show Password') {
    this.textContent = 'Hide Password';
    myInput.setAttribute('type', 'text');
  } else {
    this.textContent = 'Show Password';
    myInput.setAttribute('type', 'password');
  }
};
function myfunction(){
    var txt;
    if (confirm("press a button")){
        txt="you pressed ok!";
    } else{
        txt="you pressed cancel!";
    }
    document.getElementById("demo").innerHTML=txt;
}
function prin(){
  document.getElementById("ddd").style.fontSize="35px";
};
