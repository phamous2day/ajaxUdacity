
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
var streetStr = $('#street').val();
var cityStr = $('#city').val();
var address = streetStr + ', ' + cityStr;
$greeting.text('So you want to live @' + address + '?');



    return false;
    var nytimesUrl = "http://api.nytimes.com/scr/search/v2/articlesearch.json?q=" +citySearch+ 'sort&=newest&api-key=a1eeb62c8df499298c449983e6967154:3:69423736'

    $.getJSON(nytimesUrl, function(data) {
      $nytHeaderElem.text('New York Times Articles About ' + citySearch);

      articles = data.responses.docs;
      for (var i = 0; i < articles.length; i++) {
        var article = articles[i];
        $nytElem.append('<li class= "article">' + '<a href = ""' + article.web_url+ ' "> ' + article.headline.main + '</a>' + '<p>' + article.snippet + '</p>' + '</li>');
      };
    })

    var streetviewUrl = 'http://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + address + '';
    $body.append('<img class="bgimg" src=" ' + streetviewUrl + '">');
};

$('#form-container').submit(loadData);
