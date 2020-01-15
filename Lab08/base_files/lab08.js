$(document).ready(function () {
  $.get('XAMPP/topstories.atom', function(xmlDoc) {
    var stories = $('#topStories');

    $.parseXML(xmlDoc).find('entry').each(function() {
      var title = $(this).find('title')[0].textContent;
      var updated = $(this).find('updated')[0].textContent;
      var summary = $(this).find('summary')[0].textContent;
      var content = $(this).find('content')[0].textContent;

      var storyDiv = $('<div>');

      var headerDiv = $('<div>');

      var h2 = $('<h2>');
      h2.append(title);

      var h4 = $('<h4>');
      h4.append(updated);

      var sumDiv = $('<div>');
      sumDiv.append(summary);

      headerDiv.append(h2);
      headerDiv.append(h4);
      headerDiv.append(sumDiv);
      headerDiv.append($('<hr>'));

      var conDiv = $('<div>');
      conDiv.append(content);


      storyDiv.append(headerDiv);
      storyDiv.append(conDiv);

      storyDiv.addClass('story');

      stories.append(storyDiv);
      $('.story').accordion({active: false,
                             collapsible: true,
                             heightStyle:'content',
                             });

    });
  })
});
