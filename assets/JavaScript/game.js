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
  var userTotal= 0; 
  var wins= 0;
  var losses = 0;
  //  Decaring variables for tallies
$('#numberWins').text(wins);
$('#numberLosses').text(losses);
//resets the game
function reset(){
      Random=Math.floor(Math.random()*101+19);
      console.log(Random)
      $('#randomNumber').text(Random);
      c1= Math.floor(Math.random()*11+1);
      c2= Math.floor(Math.random()*11+1);
      c3= Math.floor(Math.random()*11+1);
      c4= Math.floor(Math.random()*11+1);
      userTotal= 0;
      $('#finalTotal').text(userTotal);
      } 
//adds the wins to the userTotal
function awesomeness(){
alert("You are a WINNER!!!");
  wins++; 
  $('#numberWins').text(wins);
  console.log(wins);
  reset();
}
//addes the losses to the userTotal
function loser(){
    alert ("You LOSER!!");
      losses++;
      $('#numberLosses').text(losses);
      console.log(losses);
      reset()
    }