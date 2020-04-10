$(function() {
    $(".devour").on("click", function(event) {
      var id = $(this).data("id");
      var  devoured= $(this).data("devoured");
  
      var devourState = {
        eaten: devoured
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devourState
      }).then(
        function() {
          console.log("changed sleep to", devoured);
          location.reload();
        }
      );
    });
  
    $(".make-burger").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        name: $("#newBurger").val().trim()
      };
  
      $.ajax("/api/cats", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });
  });