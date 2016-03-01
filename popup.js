$(document).ready(function () {
  page.init();
});




var page = {

  init: function () {
    page.styling();
    page.events();
  },

  styling: function () {

  },

  events: function() {
  $('form').on("submit", function (event) {
    event.preventDefault();
    console.log("CLICK ");
    var searchItem = $('#wikiwiki').val();
    var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+ searchItem.replace(" ", "%20") + '&limit=1&namespace=0&format=json';
    if (searchItem === "") {
      return false;
    }
    else {
    page.getData(url);
  }
  });

  $('body').on('click', 'a', function() {
    chrome.tabs.create({url: $(this).attr('href')});
    return false;
  });
},

  buildData: function (arr) {

      return {
        title: arr[1][0],
        extract: arr[2][0],
        link: arr[3][0]
      }
  },
  getData: function (correctUrl) {
    $.ajax ({
      method: "GET",
      url: correctUrl,
      success: function (data) {
        console.log("THIS IS THE DATA", data);
        console.log(page.buildData(data));
        page.addDataToDom(page.buildData(data),$('.container'))
      },
    })
  },
  addDataToDom: function (data, $target) {
    $target.html('');
    var htmlInsert = "";
      if (data.title === undefined) {
        return htmlInsert;
      }
      else {
      htmlInsert += '<div class="article">'+
            '<h1>' + data.title + '</h1>'+
            '<p>From Wikipedia, the free encyclopedia</p>'+
            '<p class="extract">' + data.extract + '</p>' +
            '<a href="'+ data.link + '">' + data.link + '</a>' +
          '</div>';
          }
    $target.html(htmlInsert);

  },

}
