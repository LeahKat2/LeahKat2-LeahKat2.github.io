

$('#saturate').on "input change", ->
  val = $(this).val()
  saturate = 'saturate(' + val + '%)'
  $('#saturateAmount').text(val)
  $('#circle').css('-webkit-filter', saturate)

  $('#lightness').on "input change", ->
  val = $(this).val()
  saturate = 'saturate(' + val + '%)'
  $('#saturateAmount').text(val)
  $('#circle').css('-webkit-filter', lightness)
  )};
