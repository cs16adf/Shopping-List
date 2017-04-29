$(document).ready(function() {
  var del_btn = "<button class='fa fa-trash-o'></button>";
  var check_btn = "<button class='fa fa-check-circle-o'></button>";
  var times_btn = "<button class='fa fa-times'></button>";

  $( "#item" ).submit(function( event ) {
    var x = $("input").val();
    $('.list').append("<li>"+x+del_btn+check_btn+"</li>");
    event.preventDefault();
  });

  $('.list').on('click', '.fa-trash-o', function(){
    $(this).parent().remove();
  });

  $('.list').on('click', '.fa-check-circle-o', function(){
    var item = $(this).parent().text();
    $(this).parent().remove();
    $('.complete-list').append("<li class='complete'>"+item+del_btn+times_btn+"</li>");
  });

  $('.complete-list').on('click', '.fa-times', function(){
    var item = $(this).parent().text();
    $(this).parent().remove();
    $('.list').append("<li>"+item+del_btn+check_btn+"</li>");
  });

  $('.complete-list').on('click', '.fa-trash-o', function(){
    $(this).parent().remove();
  });
});