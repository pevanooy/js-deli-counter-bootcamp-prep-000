var katzDeliLine = [];
function takeANumber(katzDeliLine, newPerson){
  katzDeliLine.push(newPerson);
  var retString = "Welcome, " + newPerson.toString() + ". You are number " + katzDeliLine.length.toString() + " in line."
  return retString
}

function nowServing(katzDeliLine){
  var retString
  if (katzDeliLine.length > 0){
    retString = "Currently serving " + katzDeliLine[0] + "."
    katzDeliLine.shift()
  }
  else {
    retString = "There is nobody waiting to be served!"
  }
 return retString
}

function currentLine(){

}
