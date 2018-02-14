// $5 donate button
var button = document.createElement("button");
button.innerHTML = "Donate $5";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

button.addEventListener ("click", function(){
  alert("You just donated $5 to STC");
});

// $15 donate button
var button = document.createElement("button");
button.innerHTML = "Donate $15";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

button.addEventListener ("click", function(){
  alert("You just donated $15 to STC");
});

// $25 donate button
var button = document.createElement("button");
button.innerHTML = "Donate $25";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

button.addEventListener ("click", function(){
  alert("You just donated $25 to STC")
});
