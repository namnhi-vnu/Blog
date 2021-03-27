"use strict";

var today = new Date();
var time = today.getFullYear();
document.getElementById("hvn").innerHTML = time;

function addmore() {
  var add = document.querySelector('#addmores');
  add.classList.toggle('section-content-languages-category-responsive');
}

function addmenu() {
  var addmenu = document.querySelector('.nav-list');
  addmenu.classList.toggle('nav-list-responsive');
  console.log('addmenu');
}