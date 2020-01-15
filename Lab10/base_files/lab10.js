var express = require('express');
var app = express();
var uuid = require('node-uuid');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var assert = require('assert');

mongoose.connect('localhost:27017/lab10');

var Schema = mongoose.Schema;

var userSchema = new Schema({
	username: {type: String,
		unique: true,
		index: true},
	password: String
});
var User = mongoose.model("user", userSchema, "user");
// var arr = [{username: "admin", password: "1234"}, {username: "rfortier", password: "1234"}];
// User.insertMany(arr, function(error, docs) {});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.get('/checkUsername', function(request, response) {
	response.render('enterUsername', {message: 'Please enter a username to  check'});
});

app.post('/checkUsername', function(request, response){
	var username = request.body['username'];
	User.find({username: username}).then(function(result){
		if (result.length > 0){
			response.render('enterUsername', {message: 'The username already exists. Please try another.'});
		} else {
			response.render('enterUsername', {message: 'That username is available.'})
		}
	});
});


app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function () {
	console.log('Listening on port ' + app.get('port'));
});
