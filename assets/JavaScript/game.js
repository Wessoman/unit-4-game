$( document ).ready(function(){
  var Random=Math.floor(Math.random()*101+19)
  // Selects a random number between 12-120 for start of game
  //
  $('#randomNumber').text(Random);
  console.log("random number: " + Random);
  // Appending random number to the randomNumber id in the html doc
  //
  var c1= Math.floor(Math.random()*11+1)
  var c2= Math.floor(Math.random()*11+1)
  var c3= Math.floor(Math.random()*11+1)
  var c4= Math.floor(Math.random()*11+1)
  // Setting up random numbers for each crystal between one and twelve
  // 