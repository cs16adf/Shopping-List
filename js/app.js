$(document).ready(function() {
  var del_btn = "<button class='fa fa-trash-o'></button>";
  var check_btn = "<button class='fa fa-check-circle-o'></button>";
  var times_btn = "<button class='fa fa-times'></button>";

  $( "#item" ).submit(function( event ) {
    var x = $("#ip1").val();


    if(x == '') {
    $('#alert').html("<strong>Warning!</strong> Please add item");
    $('#alert').fadeIn().delay(1000).fadeOut();
    return false;
   }

    var y = $("#ip2").val();
    

$('#todos').prepend("<li>"+x+"*"+y+del_btn+check_btn+"</li>");
   $('#item')[0].reset();
   var todos = $('#todos').html();
   localStorage.setItem('todos', todos);
   return false;
    


  });

if(localStorage.getItem('todos')) {
$('#todos').html(localStorage.getItem('todos'));
}

if(localStorage.getItem('todos1')) {
$('#todos1').html(localStorage.getItem('todos1'));
}



  $('.list').on('click', '.fa-trash-o', function(){
    $(this).parent().remove();
    var todos = $('#todos').html();
    localStorage.setItem('todos', todos);
  });

  $('.list').on('click', '.fa-check-circle-o', function(){
    var item = $(this).parent().text();
    $(this).parent().remove();
    var todos = $('#todos').html();
    localStorage.setItem('todos', todos);
    $('.complete-list').append("<li class='complete'>"+item+del_btn+times_btn+"</li>");
var todos1 = $('#todos1').html();
    localStorage.setItem('todos1', todos1);
  });

  $('.complete-list').on('click', '.fa-times', function(){
    var item = $(this).parent().text();
    $(this).parent().remove();
    $('.list').append("<li>"+item+del_btn+check_btn+"</li>");
    var todos = $('#todos').html();
    localStorage.setItem('todos', todos);
    var todos1 = $('#todos1').html();
    localStorage.setItem('todos1', todos1);

  });

  $('.complete-list').on('click', '.fa-trash-o', function(){
    $(this).parent().remove();
    var todos1 = $('#todos1').html();
    localStorage.setItem('todos1', todos1);

    

  });
});