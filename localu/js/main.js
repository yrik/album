$(document).ready(function(){

 /* Navbar */
 $(window).scroll(function(){
  if( $(window).scrollTop() > 80){
   $('.navbar').removeClass('navbar-transparent');
   $('#logo').addClass('logo-small');
  }else{
   $('.navbar').addClass('navbar-transparent');
   $('#logo').removeClass('logo-small');

  }
 });

 });