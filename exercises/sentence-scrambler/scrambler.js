function stringPrinter( starterString ){
  $('#output').append( starterString )
}

function funnySentence( noun, adjective, verb, adverb ){
  var sentence = "The " + adjective + " " + noun + " " + verb + " " + adverb + ".";
  stringPrinter(sentence);
}

funnySentence("boy", "weird", "runs", "swiftly")

funnySentence("girl", "uptight", "fell", "astoundedly")

funnySentence("cat-face", "ugly", "meows", "harshly")

funnySentence("doll", "porcelain", "stares", "creepily")

funnySentence("wolf", "sly", "cries", "wolfily")
