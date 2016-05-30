(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

        
$(document).ready(function(){
 $('.tooltipped').tooltip({delay: 50});
 $('select').material_select();

 $('.datepicker').pickadate({
 	selectMonths: true, // Creates a dropdown to control month
    selectYears: 30, // Creates a dropdown of 15 years to control year
   	min: [1990,01,01],
   	max: [2017,01,01]

 });
       
});