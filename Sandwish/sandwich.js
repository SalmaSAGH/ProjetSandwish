function reloadPage() {
  location.reload();
 }
 $(document).ready(function() {
   $("#btnEat").click(function() {
     $('.eat').fadeIn();
     $('.Close').fadeIn();
   });
 
 });
 $(document).ready(function(){
   setTimeout(function() {
     $('#preloader').fadeOut('slow', function() {
       $('#preloader').remove();
     });
   }, 2900);
 });
 
 $(document).ready(function() {
   $("#add-steak").click(function() {
     $('.viande2').fadeIn();
   });
   $("#rem-steak").click(function() {
     $('.viande2').fadeOut();
   });
 
 });
 
 
 $(document).ready(function(){
   var msg=0;
 
    // Click on the 'Validate' button
 
   $('.btn').click(function(){
 // If no ingredients are selected
     if($count = 0){ 
       $('input[name="toppings"]').prop('checked', false);
     }
     else{
       if($('.link-cheese').prop("checked") == true || $('.link-steak').prop('checked') == true || $('.link-tomato').prop("checked") == true || $('.link-salad').prop('checked') == true || $('.link-cucumber').prop("checked") == true || $('.link-mayo').prop("checked") == true){
       $('.plate').fadeIn();
       $('label').remove();
       $('input').remove();
       $('.breadtotal').fadeIn();
       $('.container1').remove();
       $('h4').html('Your meal is ready.....<br> Good appetite!!!');
       $('h4').css('text-align', 'center');
       $('.btnEat').fadeIn();
       
       }
 
 
 
   
       else{
         
         if(msg == 0){
           alert('Please select at least one floor component ❌');
           msg+=1;
         }
         else if(msg == 1){
           alert('Sir please i told you to choice somthing 😡');
             msg+=1;
         }
         else{
           alert('Sorry your basket is empty 🤷🏻');
           $('.container1').remove();
           $('h4').remove();
         }
       }
       
     }
   });
 
 
 
 
   $('input').click(function(){
     if($('.link-cheese').prop("checked") == true){
       $('.cheese').fadeIn();
     }
     else if($('.link-cheese').prop("checked") == false){
       $('.cheese').fadeOut();
     }
     if($('.link-steak').prop('checked') == true){
       $('.viande').fadeIn();
     }
     else if($('.link-steak').prop("checked") == false){
       $('.viande').fadeOut();
     }
 
     if($('.link-tomato').prop("checked") == true){
       $('.tomato').fadeIn();
     }
     else if($('.link-tomato').prop("checked") == false){
       $('.tomato').fadeOut();
     }
     if($('.link-salad').prop('checked') == true){
       $('.salad').fadeIn();
     }
     else if($('.link-salad').prop("checked") == false){
       $('.salad').fadeOut();
     }
 
     if($('.link-cucumber').prop("checked") == true){
       $('.cucumber').fadeIn();
     }
     else if($('.link-cucumber').prop("checked") == false){
       $('.cucumber').fadeOut();
     }
     if($('.link-mayo').prop("checked") == true){
         $('.mayonnaise').fadeIn();
       }
       else if($('.link-mayo').prop("checked") == false){
         $('.mayonnaise').fadeOut();
       }
     
   });
 });
 
 
 
 