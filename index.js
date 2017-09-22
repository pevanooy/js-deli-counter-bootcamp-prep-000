var katzDeliLine = [];
function takeANumber(katzDeliLine, newPerson){
  katzDeliLine.push(newPerson);
  var retString = "Welcome, " + newPerson.toString() + ". You are number " + katzDeliLine.length.toString() + " in line."
  return retString
}

function nowServing(){
  var retString
  if (katzDeliLine.length > 0){
    retString = "Currently Serving " + katzDeliLine[0] + "."
    katzDeliLine.shift()
  }
  else {
    retString = "The line is currently empty."
  }
 return retString
}

function currentLine(){

}
