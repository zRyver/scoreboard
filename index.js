"use strict"
var scoreHome =0
var scoreGuess=0
function plusOneHome(){
   scoreHome +=1
   document.getElementById("score-home").innerText= scoreHome
}

function plusTwoHome(){
    scoreHome +=2
    document.getElementById("score-home").innerText= scoreHome
}

function plusThreeHome(){
    scoreHome+=3
    document.getElementById("score-home").innerText= scoreHome
}

function plusOneGuess(){
    scoreGuess +=1
    document.getElementById("score-guess").innerText= scoreGuess
 }
 
 function plusTwoGuess(){
     scoreGuess +=2
     document.getElementById("score-guess").innerText= scoreGuess
 }
 
 function plusThreeGuess(){
     scoreGuess+=3
     document.getElementById("score-guess").innerText= scoreGuess
 }