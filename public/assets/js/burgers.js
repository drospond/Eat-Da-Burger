$(function() {
    $(".devour").on("click", function(event) {
      var id = $(this).data("id");
  
      var devourState = {
        eaten: true
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devourState
      }).then(
        function() {
          location.reload();
        }
      );
    });
  
    $(".burger-form").on("submit", function(event) {
      event.preventDefault();
  
      const newBurger = {
        burger_name: $("#newBurger").val().trim(),
        devoured: 0
      };
  
      $.ajax("/api/burgers", {
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