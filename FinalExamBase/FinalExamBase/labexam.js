var express = require('express');
var app = express();

var session = require('express-session');
var bodyParser = require('body-parser');
var uuid = require('uuid/v1');
var mongoose = require('mongoose');

// database config
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/performances');

// middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// configure view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

// configure sessions
app.use(session({
  genid: function(request) {
    return uuid();
  },
  resave: false,
  saveUninitialized: false,
  secret: 'I hope this exam goes well'
}));

// write your database schema here
var Schema = mongoose.Schema;
var theatreSchema = new Schema({
  name: {type: String,
             unique: true,
             index: true},
  address: String,
  phone: {type: String,
          validate: [/^1[0-9]{8}$/, 'must be 9 digits']}
}, {collection: 'theatres'});
var Theatre = mongoose.model('theatre', theatreSchema, 'theatre');

var performanceSchema = new Schema({
  showDate: {type: String,
             index: true},
  startTime: String,
  performanceName: String,
  type: String,
  theatreName: String
}, {collection: 'performances'});
var Performance = mongoose.model('performance', performanceSchema, 'performance');

var reservationSchema = new Schema({
  performanceName:{type: String,
                   index: true},
  theatreName: String,
  firstName: String,
  lastName: String,
  address: String,

  phone: {type: String,
        validate: [/^1[0-9]{8}$/, 'must be 9 digits']},
  confirmNum: String
}, {collection: 'reservations'});
var Reservation = mongoose.model('reservation', reservationSchema, 'reservation');


// this route handles the XML generation.
// Go to http://localhost:3001/list_performances/Diamond
// to see an example of the output it will produce
app.get('/list_performances/:theatre', function(request, response) {
  var theatre = request.params.theatre;
  response.type('xml');
  Performance.find({theatreName: theatre}).then(function(results) {
    response.render('list_performances', {
      performances: results
    });
  });
});

// route for /make_reservation goes here
// This route shows the form
app.get('/make_reservation', function(request, response){

    Theatre.find().then(function(results){
      for(var i =0; i< results.length; i++){
        $('#theatreName').add(results[i].name+ " - " +results[i].address);
      }
    });

    Performance.find().then(function(results){
      for(var i =0; i< results.length; i++){
        $('#performance').add(results[i].performanceName+ " - " + results[i].showDate + " - " + results[i].startTime);
      }
    });
  response.render('make_reservation', {title: 'Make a Reservation'});
});


// use this function to generate a confirmation number
function generateConfirmationNumber() {
  var max = 1000000000;
  return Math.floor(Math.random() * Math.floor(max));
}

// route for /handleReservation goes here
// This route handles the form data

app.post('/handleReservation', function(request, response){
  var theatreName = request.body.theatreName;
  var performanceName = request.body.performance;
  var firstName = request.body.firstName;
  var lastName = request.body.lastName;
  var address = request.body.address;
  var phone = request.body.phone;
  var confirmNum = generateConfirmationNumber();
  var newReservation = new Reservation({performanceName: performanceName,
                                        theatreName: theatreName,
                                        firstName: firstName,
                                        lastName: lastName,
                                        address: address,
                                        phone: phone,
                                        confirmNum: confirmNum});
  newReservation.save(function(error){
    if (error) {
      console.log('Unable to reserve: ' + error);
      response.render('reservation');
    } else {
      request.session.confirmNum = confirmNum;
      response.render('registrationSuccess', {confirmNum: confirmNum,
                                              title: 'You have Reserved a seat!'});
    }

  })
});
app.listen(3001, function() {
  console.log('Listening on port 3001');
});
