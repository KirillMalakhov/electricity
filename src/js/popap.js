$('.popup_link').on('click', function(event){
  event.preventDefault();
  $('.popup').addClass('popup_active')
  $('body').addClass('ovh')
  $('.popup_around').addClass('popup_active')
});
$('.popup_exit').on('click', function(event){
  event.preventDefault();
  $('.popup').removeClass('popup_active')
  $('body').removeClass('ovh')
  $('.popup_around').removeClass('popup_active') 
});
$('.tabs__form-leftside').on('click', function(event){
  event.preventDefault();
  $('.tabs__form').addClass('popup_active') 
});
$('.tabs__form-exit').on('click', function(event){
  event.preventDefault();
  $('.tabs__form').removeClass('popup_active') 
});