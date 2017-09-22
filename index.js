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

function currentLine(katzDeliLine){
  if (katDeliLine.length == 0){return "The line is currently empty."}
  else {
    var retString = "The line is currently: "
    for (var i=0; i < katzDeliLine.length; i++){
      var nbrInLine = i + 1
      retString = retString +  nbrInLine.toString() + ". " + katzDeliLine[i] + ", "
    }

  }
}
