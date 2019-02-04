$(function(){ // you can wrap it here with in document ready block
   var $count = 0;
   $('#button').click(function(){
    $count++;
      $('#text').text($count);
   });
});
