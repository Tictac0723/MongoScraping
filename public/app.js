$("#scrape").on("click", function() {
    $("#noArticles").hide();
    $.getJSON("/articles", function(data) {
        console.log(data);
        // For each one
        for (var i = 0; i < data.length; i++) {
          $("#articles").append("<div class='panel-heading'><h3 class='panel-title'>" + data[i].title + "<div class='panel-body'>" + data[i].link + "</div> <button type='button' id='favorite' data-id='" + data[i]._id + "' class='btn btn-default'>Add to Favorites</button></p></div>");
        }

        });
});

$("#favorite").on("click", function() {
    $.getJSON("/articles/:id", function(data) {
        for (var i = 0; i < data.length; i++) {
            $("#articles").append("<div class='panel-heading'><h3 class='panel-title'>" + data[i].title + "<div class='panel-body'>" + data[i].link + "</div> <button type='button' id='favorite' data-id='" + data[i]._id + "' class='btn btn-default'>Add to Favorites</button></p></div>");
          }
    })
})