$('a, p').hover(function() {
  $(this).toggleClass('text-danger pointer');
});

$('#headerAdvertBanner').click(function() {
  $('#headerAdvert').toggleClass('expand');
});
