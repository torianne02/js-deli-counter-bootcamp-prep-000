var katzDeli = [];
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  for (var i = 0; i < katzDeliLine.length; i++) {
    if (katzDeliLine[i] === name) {
      return "Welcome, " + name + ". " + "You are number " + (i + 1) + " in line."
    }
  }
}
function nowServing(katzDeliLine) {
  var nextUp = "";
  if (katzDeliLine.length > 0) {
    for (var i = 0; i < katzDeliLine.length; i++) {
      nextUp += "Currently serving " + katzDeliLine[0] + ".";
      console.log(katzDeliLine.slice(1, katzDeliLine.length));
      return nextUp;
    }
  }
  else {
      return "There is nobody waiting to be served!"
  }
}