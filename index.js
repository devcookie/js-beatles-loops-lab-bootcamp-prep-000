function theBeatlesPlay(musicians, instruments) {
  var array = []
  //var counter = 0
  for(var i = 0; i <= musicians.length; i++) {
    array.push(musicians[i] + ' plays ' + instruments[i])
  }
  return array
}