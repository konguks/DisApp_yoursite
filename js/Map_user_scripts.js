/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #mapback */
    $(document).on("click", "#mapback", function(evt)
    {
         /*global activate_page */
         //activate_page("#mainpage"); 
        window.location.href='Det.html'; 
    });
    
    }
    function crd1_clk{
        
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
