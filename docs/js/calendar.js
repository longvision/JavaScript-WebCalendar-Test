window.onload = function() {
  var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  const date = new Date()
  var currentMonth = months[date.getMonth()]
  var currentYear = date.getFullYear()

  var days
  $('.todayDate').append(currentMonth + ' ' + currentYear)

  if (
    currentMonth === 'January' ||
    currentMonth === 'March' ||
    currentMonth === 'May' ||
    currentMonth === 'July' ||
    currentMonth === 'August' ||
    currentMonth === 'October' ||
    currentMonth === 'December'
  ) {
    var days = 31
  } else if (currentMonth === 'February') {
    var days = 28
  } else {
    var days = 30
  }

  month = []
  for (var i = 0; i < days; i++) {
    month.push(i + 1)
  }

  for (var i = 0; i < days; i++) {
    $('.mySelect').append(`<option>${i}</option>`)
  }

  $('.board').append('<ul class="month"></ul>')
  for (var i = 0; i < days; i++) {
    $('.month').prepend('<li class="day"></li>')
  }

  $('.day').prepend('<i></i>')
  for (var i = 0; i < days; i++) {
    $('.day')
      .eq(i)
      .find('i')
      .append(`${month[i]}`)
  }

  $('.day').click(function() {
    var option = $(this)
      .find('i')
      .text()
    var number = parseInt(option)

    var text = $(this)
      .find('p')
      .text()
    if (text !== '') {
      $('.mySelect').val(number)
      $('.apt').val(text)
      $('.edit-btn').css('display', 'flex')
      $('.submit-btn').css('display', 'none')
      $('.edit-text').css('display', 'flex')
    }
  })
}

function editApt() {
  var x = $('select.mySelect')
    .children('option:selected')
    .val()
  console.log(x)
  var savedValue = $('.day')
    .eq(x - 1)
    .find('p')
    .text()
  var input = $('.apt').val()
  if (input !== savedValue) {
    $('.day')
      .eq(x - 1)
      .find('p')
      .remove()
    $('.day')
      .eq(x - 1)
      .find('i')
      .append(`<p class="apt">${input}</p>`)
    $('.panel').css('display', 'none')
  }
  var input = $('.apt').val('')

  $('.edit-btn').css('display', 'none')
  $('.edit-text').css('display', 'none')
  $('.submit-btn').css('display', 'flex')
}

$('#form').submit(function(e) {
  e.preventDefault()
  saveApt()
})

function saveApt() {
  var x = $('select.mySelect')
    .children('option:selected')
    .val()
  console.log(x)

  var input = $('.apt').val()

  if (
    $('.day')
      .eq(x - 1)
      .find('p')
      .text().length ||
    input === null
  ) {
    $('.panel')
      .css('display', 'flex')
      .fadeOut(3000)
  } else {
    $('.day')
      .eq(x - 1)
      .find('p')
      .remove()
    $('.day')
      .eq(x - 1)
      .find('i')
      .append(`<p class="apt">${input}</p>`)
  }
  var input = $('.apt').val('')
}

function deleteApt() {
  var x = $('select.mySelect')
    .children('option:selected')
    .val()
  console.log(x)
  $('.day')
    .eq(x - 1)
    .find('p')
    .remove()
  var input = $('.apt').val('')
}
