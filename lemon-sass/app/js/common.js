$(document).ready(function(){
  $(".fancybox").fancybox();

  $('input#name, input#email, input#tel').unbind().blur( function(){
   var id = $(this).attr('id');
   var val = $(this).val();

   switch(id)
   {
    case 'name':
    var rv_name = /^([a-zA-Zа-яА-Я])+\s+([a-zA-Zа-яА-Я])+./; 

    if(val.length > 2 && val != '' && rv_name.test(val))
    {
     $(this).addClass('not_error');
     $(this).next('.error-box').text('Ok')
     .css('color','green')
     .animate({'paddingLeft':'10px'},400)
     .animate({'paddingLeft':'5px'},400);
   }
   else
   {
     $(this).removeClass('not_error').addClass('Error');
     $(this).next('.error-box').html('Error! Example: Anna Kos')
     .css('color','red')
     .animate({'paddingLeft':'10px'},400)
     .animate({'paddingLeft':'5px'},400);
   }
   break;

   case 'email':
   var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
   if(val != '' && rv_email.test(val))
   {
     $(this).addClass('not_error');
     $(this).next('.error-box').text('Ok')
     .css('color','green')
     .animate({'paddingLeft':'10px'},400)
     .animate({'paddingLeft':'5px'},400);
   }
   else
   {
     $(this).removeClass('not_error').addClass('error');
     $(this).next('.error-box').html('Error! Example: example123@mail.ru')
     .css('color','red')
     .animate({'paddingLeft':'10px'},400)
     .animate({'paddingLeft':'5px'},400);
   }
   break;

   case 'tel':
   var rv_tel = /^[0-9]{3}[-]{1}[0-9]{3}[-]{1}[0-9]{3}$/;
   if(val != '' && rv_tel.test(val))
   {
     $(this).addClass('not_error');
     $(this).next('.error-box').text('Ok')
     .css('color','green')
     .animate({'paddingLeft':'10px'},400)
     .animate({'paddingLeft':'5px'},400);
   }
   else
   {
     $(this).removeClass('not_error').addClass('error');
     $(this).next('.error-box').html('Error! Example: 123-123-123')
     .css('color','red')
     .animate({'paddingLeft':'10px'},400)
     .animate({'paddingLeft':'5px'},400);
   }
   break;
           } // end switch(...)
         }); // end blur()

  $('form#feedback-form').submit(function(e){
    e.preventDefault();
    if($('.not_error').length == 3)
    {       
     $.ajax({
      type: 'POST',
      url: 'mail.php',
      data: $('form#feedback-form').serialize(),

      beforeSend: function(xhr, textStatus){ 
       $('form#feedback-form :input').attr('disabled','disabled');
     },

     success: function(response){
      $('form#feedback-form :input').removeAttr('disabled');
      alert(response);
    }
  }); 
   }
   else
   {
    return false;
  }
}); 
}); 