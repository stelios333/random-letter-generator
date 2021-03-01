function on() {
  if (document.getElementById('english').checked) {
    if (document.getElementById('all').checked) {
      var myArray = genCharArray('a', 'z').concat(genCharArray('A', 'Z'));

      var randomItem = myArray[Math.floor(Math.random() * myArray.length)];

      document.getElementById('out').innerHTML = randomItem;
    }
    if (document.getElementById('lowercase').checked) {
      var myArray = genCharArray('a', 'z');

      var randomItem = myArray[Math.floor(Math.random() * myArray.length)];

      document.getElementById('out').innerHTML = randomItem;
    }
    if (document.getElementById('capital').checked) {
      var myArray = genCharArray('A', 'Z');

      var randomItem = myArray[Math.floor(Math.random() * myArray.length)];

      document.getElementById('out').innerHTML = randomItem;
    }
  } else {
    if (document.getElementById('all').checked) {
      var myArray = genCharArray('α', 'ω').concat(genCharArray('Α', 'Ω'));

      var randomItem = myArray[Math.floor(Math.random() * myArray.length)];

      document.getElementById('out').innerHTML = randomItem;
    }
    if (document.getElementById('lowercase').checked) {
      var myArray = genCharArray('α', 'ω');

      var randomItem = myArray[Math.floor(Math.random() * myArray.length)];

      document.getElementById('out').innerHTML = randomItem;
    }
    if (document.getElementById('capital').checked) {
      var myArray = genCharArray('Α', 'Ω');

      var randomItem = myArray[Math.floor(Math.random() * myArray.length)];

      document.getElementById('out').innerHTML = randomItem;
    }
  }
}

function genCharArray(charA, charZ) {
  var a = [],
    i = charA.charCodeAt(0),
    j = charZ.charCodeAt(0);
  for (; i <= j; ++i) {
    a.push(String.fromCharCode(i));
  }
  return a;
}
