var finance;
var income;
var incomeOther;
var totalIncome;

var household;
var food;
var clothes;
var equipment;
var travel;
var livingCostsOther;
var totallivingCosts;

var eatingOut;
var events;
var transport;
var socialOther;
var totalSocialCosts;

var rent;
var utilities;
var internet;
var insurance;
var phone;
var utilitiesOther;
var totalUtilityCosts;

var totalOutgoings;
var total;

var points;

var heights = [165, 216, 369, 318];

function add() {
  finance = Number(document.getElementById('finance').value);
  income = Number(document.getElementById('income').value);
  incomeOther = Number(document.getElementById('incomeOther').value);

  household = Number(document.getElementById('household').value);
  food = Number(document.getElementById('food').value);
  clothes = Number(document.getElementById('clothes').value);
  equipment = Number(document.getElementById('equipment').value);
  travel = Number(document.getElementById('travel').value);
  livingCostsOther = Number(document.getElementById('livingCostsOther').value);

  eatingOut = Number(document.getElementById('eatingOut').value);
  events = Number(document.getElementById('events').value);
  transport = Number(document.getElementById('transport').value);
  socialOther = Number(document.getElementById('socialOther').value);

  rent = Number(document.getElementById('rent').value);
  utilities = Number(document.getElementById('utilities').value);
  internet = Number(document.getElementById('internet').value);
  insurance = Number(document.getElementById('insurance').value);
  phone = Number(document.getElementById('phone').value);
  utilitiesOther = Number(document.getElementById('utilitiesOther').value);


  totalIncome = finance + income + incomeOther;

  totalLivingCosts = household + food + clothes + equipment + travel + livingCostsOther;
  totalSocialCosts = eatingOut + events + transport + socialOther;
  totalUtilityCosts = rent + utilities + internet + insurance + phone + utilitiesOther;

  totalOutgoings = totalLivingCosts + totalSocialCosts + totalUtilityCosts;
  total = totalIncome - totalOutgoings;

  total = total.toFixed(2); //rounds the total down to 2dp.

  console.log (totalLivingCosts + totalSocialCosts + totalUtilityCosts);
  if (totalOutgoings == 0) {
      $("#result").css("background-color", "#EC1010");
      $(".results").css("display", "block");
      $("#submitButton").attr("disabled", true);
      $('#submitButton').css("background-color", "#A4A6A8");
      var str = "You have not entered any values for your expenses. Please enter values to be calculated.";
      document.getElementById("result").innerHTML = str;
  } else if (totalIncome == 0) {
      $("#result").css("background-color", "#EC1010");
      $(".results").css("display", "block");
      $("#submitButton").attr("disabled", true);
      $('#submitButton').css("background-color", "#A4A6A8");
      var str = "You have not entered any values for your income. Please enter values to be calculated.";
      document.getElementById("result").innerHTML = str;
  } else if (totalOutgoings > totalIncome) {
      $("#result").css("background-color", "#EC1010");
      $(".results").css("display", "block");
      $("#submitButton").attr("disabled", false);
      $('#submitButton').css("background-color", "#002147");
      points = 0;
      var str = "You have $" + total + " remaining. Your expenses are greater than your income. Have another look at how you can balance your budget.";
      document.getElementById("result").innerHTML = str;
  } else if ((totalOutgoings > (totalIncome * 0.8)) && (totalOutgoings <= totalIncome))  {
      $("#result").css("background-color", "#EC7610");
      $(".results").css("display", "block");
      $("#submitButton").attr("disabled", false);
      $('#submitButton').css("background-color", "#002147");
      points = 25;
      var str = "You have $" + total+ " remaining. Your expenses are greater than 80% of your income. Be careful.";
      document.getElementById("result").innerHTML = str;
  } else {
      $("#result").css("background-color", "#10EC10");
      $(".results").css("display", "block");
      $("#submitButton").attr("disabled", false);
      $('#submitButton').css("background-color", "#002147");
      points = 40;
      var str = "You have $" + total+ " remaining. Your expenses are well below your income. Well done.";
      document.getElementById("result").innerHTML = str;
  }
}

function submit(){
  window.top.location = "https://countdowntolincoln100-sandbox.mxapps.io/link/completeBudget?points=" + points;
}

document.getElementById('result').innerHTML = total;

function incomeShowHide() {
  var x = $("#box-income");
  if (x.height() == 0) {
    x[0].style.display = "block";
    $('.income-title').animate({ 'border-bottom-left-radius': '0px', 'border-bottom-right-radius': '0px' });
    x.animate({ height: heights[0], 'padding-top': '19px', 'padding-bottom': '19px' }, 500, function(){
      x.animate({ opacity: 1 }, 500);
    });
  } else {
    x.animate({ height: 0, 'padding-top': '0px', 'padding-bottom': '0px' }, 500, function(){
      x[0].style.display = "none";
      x[0].style.opacity = 0;
      $('.income-title').animate({ 'border-bottom-left-radius': '10px', 'border-bottom-right-radius': '10px' });
    });
  }
}

function socialShowHide() {
  var x = $("#box-social");
  if (x.height() == 0) {
    x[0].style.display = "block";
    $('.social-title').animate({ 'border-bottom-left-radius': '0px', 'border-bottom-right-radius': '0px' });
    x.animate({ height: heights[1], 'padding-top': '19px', 'padding-bottom': '19px' }, 500, function(){
      x.animate({ opacity: 1 }, 500);
    });
  } else {
    x.animate({ height: 0, 'padding-top': '0px', 'padding-bottom': '0px' }, 500, function(){
      x[0].style.display = "none";
      x[0].style.opacity = 0;
      $('.social-title').animate({ 'border-bottom-left-radius': '10px', 'border-bottom-right-radius': '10px' });
    });
  }
}

function utilitiesShowHide() {
  var x = $("#box-utilities");
  if (x.height() == 0) {
    x[0].style.display = "block";
    $('.utilities-title').animate({ 'border-bottom-left-radius': '0px', 'border-bottom-right-radius': '0px' });
    x.animate({ height: heights[2], 'padding-top': '19px', 'padding-bottom': '19px' }, 500, function(){
      x.animate({ opacity: 1 }, 500);
    });
  } else {
    x.animate({ height: 0, 'padding-top': '0px', 'padding-bottom': '0px' }, 500, function(){
      x[0].style.display = "none";
      x[0].style.opacity = 0;
      $('.utilities-title').animate({ 'border-bottom-left-radius': '10px', 'border-bottom-right-radius': '10px' });
    });
  }
}

function livingCostsShowHide() {
  var x = $("#box-livingCosts");
  if (x.height() == 0) {
    x[0].style.display = "block";
    $('.livingCosts-title').animate({ 'border-bottom-left-radius': '0px', 'border-bottom-right-radius': '0px' });
    x.animate({ height: heights[3], 'padding-top': '19px', 'padding-bottom': '19px' }, 500, function(){
      x.animate({ opacity: 1 }, 500);
    });
  } else {
    x.animate({ height: 0, 'padding-top': '0px', 'padding-bottom': '0px' }, 500, function(){
      x[0].style.display = "none";
      x[0].style.opacity = 0;
      $('.livingCosts-title').animate({ 'border-bottom-left-radius': '10px', 'border-bottom-right-radius': '10px' });
    });
  }
}
