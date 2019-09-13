"use strict";

console.log('JS Working');

fetch('https://randomuser.me/api/')
	.then(function(response){
		return response.json();
	})
	.then(function(jsonData){
		console.log(jsonData);

    document.getElementById('picture').src = jsonData.results[0].picture.large;
    document.getElementById('name-info').innerHTML = jsonData.results[0].name.first + ' ' + jsonData.results[0].name.last;
    document.getElementById('email-info').innerHTML = jsonData.results[0].email;
    var date = new Date(jsonData.results[0].dob.date);
    document.getElementById('bday-info').innerHTML = date.toLocaleDateString();
    document.getElementById('address-info').innerHTML = jsonData.results[0].location.street;
    document.getElementById('phone-info').innerHTML = jsonData.results[0].cell;
    document.getElementById('password-info').innerHTML = jsonData.results[0].login.password;
  });


let button = document.getElementById("profile");

button.onmouseover = function() {
    document.getElementById("button").style.display = 'block';
}
button.onmouseout = function() {
    document.getElementById("button").style.display = 'none';
}


function openIcon(event, iconName) {
  var i, iconcontent, iconlinks;
  iconcontent = document.getElementsByClassName("iconcontent");
  for (i = 0; i < iconcontent.length; i++) {
    iconcontent[i].style.display = "none";
  }
  iconlinks = document.getElementsByClassName("iconlinks");
  for (i = 0; i < iconlinks.length; i++) {
    iconlinks[i].className = iconlinks[i].className.replace(" active", "");
  }
  document.getElementById(iconName).style.display = "block";
  event.currentTarget.className += " active";
}