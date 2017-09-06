var favoriteIds = [];

$("#scrape").on("click", function() {
    $("#noArticles").hide();
    $.getJSON("/articles", function(data) {
        console.log(data);
        // For each one
        for (var i = 0; i < data.length; i++) {
          $("#scrapedArticles").append("<div class='panel panel-default' id='articles'><div class='panel-heading'><h3 class='panel-title'>" + data[i].title + "<div class='panel-body'>" + data[i].link + "</div> <button type='button' class='favorite' data-id='" + data[i]._id + "' class='btn btn-default' onclick='favoriteAdded()'>Add to Favorites</button></p></div></div>");
        }
        

        });
});

function favoriteAdded() {
   var articleId = $(this).attr("data-id");
   $(favoriteIds).push(articleId);
   console.log(favoriteIds);
    alert("This article has been added to your favorites!");

};



