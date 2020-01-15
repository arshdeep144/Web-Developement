var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

var usernames = ['admin', 'bsmith', 'rfortier'];

function userExists(toFind) {
  for (var i = 0; i < usernames.length; i++) {
    if (usernames[i] === toFind) {
      return true;
    }
  }
  return false;
}

app.get('/checkUsername', function(request, response) {
  response.render('enterUsername', {message: 'Please enter a username to  check'});
});

app.post('/checkUsername', function(request, response){
  var username = request.body['username'];
  if (userExists(username)) {
    response.render('enterUsername', {message: 'The username already exists. Please try another.'})
  } else {
    response.render('enterUsername', {message: 'That username is available.'})
  }
});


app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function () {
  console.log('Listening on port ' + app.get('port'));
});
