$(document).ready(function(){
   $("button#click").click(function(event) {
       event.preventDefault();
        
        
        var flavors = ['chocolate', 'strawberry', 'coffee', 'vanilla']

        flavors.forEach(function(flavor){
             $(".ice").append(flavor)
        });
    });
});  