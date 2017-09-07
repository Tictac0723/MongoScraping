$("document").on("click", ".favorite", function () { 
    // console.log($(this).attr("data-id"));
    var thisId = $(this).attr("data-id");
    console.log(thisId);
    
      // Run a POST request to change the note, using what's entered in the inputs
      $.ajax({
        method: "POST",
        url: "/api/favorites/" + thisId,
        data: {
          // Value taken from title input
          title: this.title,
          // Value taken from note textarea
          body: this.link
        }
      }).done(function(data) {
        // Log the response
        console.log(data);
        // Empty the no articles section
        $("#noArticles").empty();
        $("#articles").empty();
      });
});
