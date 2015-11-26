(function() {

  var quoteBox = [{
      quote: 'For you will look smart and feel ignorant and the patient will not know which day it is for you and you will pretend to be smart out of ignorance.',
      author: 'John Stone, Gaudeamus Igitur'
    }, {
      quote: 'The only way to climb properly is to realize that just getting up a route is nothing, the way it is done is everything.',
      author: 'Royal Robbins'
    }, {
      quote: 'For I know the plans that I have for you.',
      author: 'The Lord, Jer 29:11'
    }, {
      quote: 'Now it\'s a sqirt mecca for mystery artist, but back then it was just magic.',
      author: 'Jim Snyder on Kayaking'
    }, {
      quote: 'One man asked another on the death of a mutual friend, \'How much did he leave?\' His friend responded, \'He left it all.\'',
      author: 'Proverb'
    }, {
      quote: 'Luke, I am your father',
      author: 'Darth Vader'
    }],
    quoteBoxClone = quoteBox.slice();

  $('#generate-button').on('click', function() {

    var rndIndex = getRandomInt(0, quoteBoxClone.length - 1),
      quotePicked = quoteBoxClone[rndIndex];

    quoteBoxClone.splice(rndIndex, 1);

    if (quoteBoxClone.length === 0) {
      quoteBoxClone = quoteBox.slice();
    }

    $('.quote').text(quotePicked.quote);
    $('.quote-author').text(quotePicked.author);

    fillTwitterInfo(quotePicked);

  });

  $('#generate-button').trigger('click');

  function fillTwitterInfo(quotePicked) {
    var href = 'https://twitter.com/intent/tweet'+
    '?text=' + quotePicked.quote +
    '&url=codepen.io/daigof/' +
    '&via=daigof_';

    $('#tweetButton').attr('href', href);


  }

  /**
   * Returns a random number between min (inclusive) and max (exclusive)
   */
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  /**
   * Returns a random integer between min (inclusive) and max (inclusive)
   * Using Math.round() will give you a non-uniform distribution!
   */
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}());
