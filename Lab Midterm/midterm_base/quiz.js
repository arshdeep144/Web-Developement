$(document).ready(function () {
  $("#nextButton").hide();
  $("#results").hide();
  $("#beginButton").click(function(){
    $("#beginButton").hide();
    $("#nextButton").show();
    $("#results").show();
    var url = 'http://csundergrad.science.uoit.ca/courses/csci3230u/mtle/quiz_questions.json';
    $.getJSON(url, function(data){
      var title = ('value',data[0]);
      var row = ('value', data[1])
      var rows = row.split('}')
      var questions = []
      var answers = []
      var correctAnswer = []
      var ans;
      var corr = false;
      for(var i = 0; i< row.length; i++){
        questions = rows[i].split('question');
        answers =rows[i].split('answers');
        correctAnswer = rows[i].split("correctAnswerIndex");
      }
      var count = 0;
      $("#title").setAttribute(title);
      $("#question").setAttribute('value', questions[count]);
      $("#answers").setAttribute('value', answers[count].split(','));
      $("#answers").click(function(){
        $(this).css("background-color","blue");
        ans = $(this).innerHTML();
      });
      $("#nextButton").click(function(){
        correctAnswer[count] = answers[count]('value', answers[correctAnswer[count]]);
        if(correctAnswer[count] == ans){
          corr = true;
        }
        count = count+1;
        // i would have appended to the table the data and wether  yo cgot it wrong or right
        // and updated the questions to the next question
        if(corr == true){
            var rowHeader = document.createElement('tr');
            rowHeader.appendChild
        }

        $("#question").setAttribute('value', questions[count]);
        $("#answers").setAttribute('value', answers[count].split(','));
        $("#answers").click(function(){
          $(this).css("background-color","blue");
          ans = $(this).innerHTML();
        });
        corr = false;
      });

    });
  });
});
