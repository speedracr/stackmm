//= require jquery.min
//= require jquery.form
//= require bootstrap.min

$(document).ready(function(){
  $('a[href=#top]').click(function(){
      $('html, body').animate({scrollTop:0}, 'slow', 'swing');
      return false;
  });
});
