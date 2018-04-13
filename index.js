function theBeatlesPlay(musicians, instruments) {
  var array = []
  // i = 0 for first array index, musicians.length for number for indexes to iterate through
  for(var i = 0; i <= musicians.length-1; i++) {
    array.push(musicians[i] + ' plays ' + instruments[i])
  }
  return array
}

function johnLennonFacts(array) {
  var countdown = array.length;
  while(countdown >= 0) {
    array[countdown] + '!!!'
    countdown--
  }
  return array
}