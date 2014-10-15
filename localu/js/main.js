$(document).ready(function(){

 /* Navbar */
 $(window).scroll(function(){
  if( $(window).scrollTop() > 80){
   $('.navbar').removeClass('navbar-transparent');
  }else{
   $('.navbar').addClass('navbar-transparent');
  }
 });

 });