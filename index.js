function theBeatlesPlay(musicians, instruments) {
  var array = []
  // i = 0 for first array index, musicians.length for number for indexes to iterate through
  for(var i = 0; i <= musicians.length-1; i++) {
    array.push(musicians[i] + ' plays ' + instruments[i])
  }
  return array
}

function johnLennonFacts(array) {
  var countdown = array.length-1;
  while(countdown >= 0) {
    var string = array[countdown].toString()
    string = string + '!!!'
    array.push(string)
    countdown --
  }
  return array
}