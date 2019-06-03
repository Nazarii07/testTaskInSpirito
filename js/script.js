$(document).ready(function(){

   $.ajax({
      type:'GET',
      dataType:'json',
      async: false,
      url:'../pidhotovka_kursy/db.json',
      success:function(data){
         console.log(data); 
         let g = id;


         $('.d').html(g);
      }
   });
});
