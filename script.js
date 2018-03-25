var nextWordNumber = 2;
var wordMeaning;
var numRight = 0;
var qAttempted = 0;
function createAbox() {
  var getNew = document.createElement("input");
  getNew.id = "word" + nextWordNumber;
  getNew.type = "text";
  var division = document.getElementById("newWord");
  division.appendChild(getNew);
  var getNewMeaning = document.createElement("input");
  getNewMeaning.id = "meaning" + nextWordNumber;
  getNewMeaning.type = "text";
  nextWordNumber = nextWordNumber + 1;
  division.appendChild(getNewMeaning);
  division.appendChild(document.createElement("br"));
}
function takeTest() {
  document.getElementById("next").disabled = true;
  document.getElementById("startScreen").hidden = true;
  document.getElementById("testScreen").hidden = false;
  document.getElementById("answer").value = "";
  document.getElementById("result").value = "";
  document.getElementById("numRightButton").value = numRight;
  document.getElementById("numAttempted").value = qAttempted;
  var randomWord = Math.floor(Math.random() * (nextWordNumber - 1)) + 1;
  document.getElementById("testWord").value = document.getElementById("word" + randomWord).value;
  wordMeaning = document.getElementById("meaning" + randomWord);
}
function checkAnswer() {
  if (wordMeaning.value == document.getElementById("answer").value) {
    result.value = "Correct";
    numRight = numRight + 1;
  } else {
    result.value = "Wrong: it is " + wordMeaning.value;
    numRight = 0;
  }
  document.getElementById("next").disabled = false;
  document.getElementById("numRightButton").value = numRight;
  qAttempted++;
  document.getElementById("numAttempted").value = qAttempted;
}
function nextWord() {
  document.getElementById("answer").value = "";
  document.getElementById("result").value = "";
  document.getElementById("next").disabled = true;
  var randomWord = Math.floor(Math.random() * (nextWordNumber - 1)) + 1;
  document.getElementById("testWord").value = document.getElementById("word" + randomWord).value;
  wordMeaning = document.getElementById("meaning" + randomWord);
}
function changeWords() {
  document.getElementById("startScreen").hidden = false;
  document.getElementById("testScreen").hidden = true;
}
function keyDown(event) {
  if (event.keyCode == 13) { // checking if the input is an enter
    if (document.getElementById("testScreen").hidden == false) {
      if (document.getElementById("next").disabled == true) {
        checkAnswer();
      } else {
        nextWord();
      }
    }
  }
}
