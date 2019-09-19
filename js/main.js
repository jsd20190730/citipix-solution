$(function () {
  $('#submit-btn').click(() => {
    console.log('submit button clicked')

    const input = $('#city-type').val().toLowerCase()

    if (input === 'nyc' || input === 'new york' || input === 'new york city') {
      console.log('display ny background')
      $('body').attr('class', 'nyc')
    } else if (input === 'sf' || input === 'san francisco' || input === 'bay area') {
      console.log('display sf background')
      $('body').attr('class', 'sf')
    } else if (input === 'la' || input === 'lax' || input === 'los angeles') {
      $('body').attr('class', 'la')
    } else if (input === 'austin' || input === 'atx') {
      console.log('display austin background')
      $('body').attr('class', 'austin')
    } else if (input === 'sydney' || input === 'syd') {
      console.log('display sydney background')
      $('body').attr('class', 'sydney')
    } else {
      console.log('no match found, show default background')
    }
  })
})
