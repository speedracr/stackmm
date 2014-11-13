//= require jquery
//= require bootstrap
//= require_tree .

$(document).ready(function(){
  $('a[href=#top]').click(function(){
      $('html, body').animate({scrollTop:0}, 'slow', 'swing');
      return false;
  });
});
