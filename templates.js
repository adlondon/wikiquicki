var templates = {
  articleTemplate: [
    '<div class="article">',
      '<h1> <%= title => </h1>',
      '<h2>From Wikipedia, the free encyclopedia</h2>',
      '<p class="extract"> <%= extract %> </p>',
      '<a href="<%= link %>"></a>',
    '</div>'

  ].join('')
}
