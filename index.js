var katzDeli = [];
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  for (var i = 0; i < katzDeliLine.length; i++) {
    if (katzDeliLine[i] === name) {
      return "Welcome, " + name + ". " + "You are number " + (i + 1) + " in line."
    }
  }
}
function nowServing(deliLine) {
  var nextUp = "";
  if (deliLine.length > 0) {
      nextUp += "Currently serving " + deliLine[0] + ".";
  }
  else {
      nextUp += "There is nobody waiting to be served!"
  }
  deliLine = deliLine.slice(1, deliLine.length);
  return nextUp;
}