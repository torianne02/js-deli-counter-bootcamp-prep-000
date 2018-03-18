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
  if (katzDeliLine === []) {
    return "There is nobody waiting to be served!"
  }
  else {
    for (var i = 0; i < katzDeliLine.length; i++) {
      return katzDeliLine[0];
    }
    katzDeliLine.shift();
  }
}