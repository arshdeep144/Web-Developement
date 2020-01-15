window.onload = function() {
  // code to handle changing the theatre drop-down goes here
  $.('#theatreName').on('change',function(e){
  fetch('list_performances.xml')
    .then((resp) => resp.text())
    .then(function(data) {
      var xmlData = parseXML(data);

      var performances = xmlData.getElementsByTagName('performances')[0];
      var theatreNameVal = performances.getAttribute('name') + " - " +
                           performances.getAttribute('address');
      var performanceNameVal = performances.getAttribute('performanceName') + " - " +
                               performances.getAttribute('showDate') + " - " +
                               performances.getAttribute('startTime');

      var theatreName = document.getElementById('theatreName');
      var performanceName = document.getElementById('performanceName');

      theatreName.setAttribute('value', theatreNameVal);
      performanceName.setAttribute('value', performanceNameVal);
    })
    .catch(function(error) {
      console.log(error);
    });
  });
};

// use this function to parse the XML
function parseXML(xmlText) {
  var parser = new window.DOMParser();
  return parser.parseFromString(xmlText, "text/xml");
}
