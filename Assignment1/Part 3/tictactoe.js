window.onload = function () {

  var turn = '1';
  whosTurn(turn);

  var first = document.getElementById('1');
  first.onclick = function () {
    if (first.innerHTML == ''){
      if (turn == '1') {
        first.innerHTML = 'X';
        turn = '2';
        whosTurn(turn);
      } else {
        first.innerHTML = 'O';
        turn = '1';
        whosTurn(turn);
      }
    }
    if((first.innerHTML == 'X' && second.innerHTML == 'X' && third.innerHTML == 'X')
      ||(first.innerHTML == 'O' && second.innerHTML == 'O' && third.innerHTML == 'O')){
        document.getElementById('winner').innerHTML = "You win!";
    }
    else if ((first.innerHTML == 'X' && fourth.innerHTML == 'X' && seventh.innerHTML == 'X')
      || (first.innerHTML == 'O' && fourth.innerHTML == 'O' && seventh.innerHTML == 'O')){
        document.getElementById('winner').innerHTML = "You win!";
    }
    else if ((first.innerHTML == 'X' && fifth.innerHTML == 'X' && ninth.innerHTML == 'X')
      || (first.innerHTML == 'O' && fifth.innerHTML == 'O' && ninth.innerHTML == 'O')){
        document.getElementById('winner').innerHTML = "You win!";
    }
  }
  var second = document.getElementById('2');
  second.onclick = function () {
    if (second.innerHTML == ''){
      if (turn == '1') {
        second.innerHTML = 'X';
        turn = '2';
        whosTurn(turn);

      } else {
        second.innerHTML = 'O';
        turn = '1';
        whosTurn(turn);

      }
    }
    if((first.innerHTML == 'X' && second.innerHTML == 'X' && third.innerHTML == 'X')
      ||(first.innerHTML == 'O' && second.innerHTML == 'O' && third.innerHTML == 'O')){
        document.getElementById('winner').innerHTML = "You win!";

    }
    else if((fifth.innerHTML == 'X' && second.innerHTML == 'X' && eighth.innerHTML == 'X')
          ||(fifth.innerHTML == 'O' && second.innerHTML == 'O' && eighth.innerHTML == 'O')){
              document.getElementById('winner').innerHTML = "You win!";

    }
  }
  var third = document.getElementById('3');
  third.onclick = function () {
    if (third.innerHTML == ''){
      if (turn == '1') {
        third.innerHTML = 'X';
        turn = '2';
        whosTurn(turn);
      } else {
        third.innerHTML = 'O';
        turn = '1';
        whosTurn(turn);
      }
    }
    if((first.innerHTML == 'X' && second.innerHTML == 'X' && third.innerHTML == 'X')
      ||(first.innerHTML == 'O' && second.innerHTML == 'O' && third.innerHTML == 'O')){
      document.getElementById('winner').innerHTML = "You win!";

    }
    else if((seventh.innerHTML == 'X' && fifth.innerHTML == 'X' && third.innerHTML == 'X')
      ||(seventh.innerHTML == 'O' && fifth.innerHTML == 'O' && third.innerHTML == 'O')){
      document.getElementById('winner').innerHTML = "You win!";

    }
    else if((ninth.innerHTML == 'X' && sixth.innerHTML == 'X' && third.innerHTML == 'X')
      ||(ninth.innerHTML == 'O' && sixth.innerHTML == 'O' && third.innerHTML == 'O')){
      document.getElementById('winner').innerHTML = "You win!";

    }
  }
  var fourth = document.getElementById('4');
  fourth.onclick = function () {
    if (fourth.innerHTML == ''){
      if (turn == '1') {
        fourth.innerHTML = 'X';
        turn = '2';
        whosTurn(turn);

      } else {
        fourth.innerHTML = 'O';
        turn = '1';
        whosTurn(turn);

      }
    }
   if ((first.innerHTML == 'X' && fourth.innerHTML == 'X' && seventh.innerHTML == 'X')
      || (first.innerHTML == 'O' && fourth.innerHTML == 'O' && seventh.innerHTML == 'O')){
      document.getElementById('winner').innerHTML = "You win!";

    }
    else if ((fifth.innerHTML == 'X' && fourth.innerHTML == 'X' && sixth.innerHTML == 'X')
       || (fifth.innerHTML == 'O' && fourth.innerHTML == 'O' && sixth.innerHTML == 'O')){
       document.getElementById('winner').innerHTML = "You win!";

    }
  }
  var fifth = document.getElementById('5');
  fifth.onclick = function () {
    if (fifth.innerHTML == ''){
      if (turn == '1') {
        fifth.innerHTML = 'X';
        turn = '2';
        whosTurn(turn);

      } else {
        fifth.innerHTML = 'O';
        turn = '1';
        whosTurn(turn);

      }
    }
    if ((first.innerHTML == 'X' && fifth.innerHTML == 'X' && ninth.innerHTML == 'X')
      || (first.innerHTML == 'O' && fifth.innerHTML == 'O' && ninth.innerHTML == 'O')){
        document.getElementById('winner').innerHTML = "You win!";

    }
    else if((fifth.innerHTML == 'X' && second.innerHTML == 'X' && eighth.innerHTML == 'X')
      ||(fifth.innerHTML == 'O' && second.innerHTML == 'O' && eighth.innerHTML == 'O')){
        document.getElementById('winner').innerHTML = "You win!";

    }
    else if((seventh.innerHTML == 'X' && fifth.innerHTML == 'X' && third.innerHTML == 'X')
      ||(seventh.innerHTML == 'O' && fifth.innerHTML == 'O' && third.innerHTML == 'O')){
        document.getElementById('winner').innerHTML = "You win!";

    }
    else if ((fifth.innerHTML == 'X' && fourth.innerHTML == 'X' && sixth.innerHTML == 'X')
       || (fifth.innerHTML == 'O' && fourth.innerHTML == 'O' && sixth.innerHTML == 'O')){
       document.getElementById('winner').innerHTML = "You win!";

    }
  }
  var sixth = document.getElementById('6');
  sixth.onclick = function () {
    if (sixth.innerHTML == ''){
      if (turn == '1') {
        sixth.innerHTML = 'X';
        turn = '2';
        whosTurn(turn);

      } else {
        sixth.innerHTML = 'O';
        turn = '1';
        whosTurn(turn);

      }
    }
   if((ninth.innerHTML == 'X' && sixth.innerHTML == 'X' && third.innerHTML == 'X')
      ||(ninth.innerHTML == 'O' && sixth.innerHTML == 'O' && third.innerHTML == 'O')){
      document.getElementById('winner').innerHTML = "You win!";

    }
    else if ((fifth.innerHTML == 'X' && fourth.innerHTML == 'X' && sixth.innerHTML == 'X')
       || (fifth.innerHTML == 'O' && fourth.innerHTML == 'O' && sixth.innerHTML == 'O')){
       document.getElementById('winner').innerHTML = "You win!";

    }
  }
  var seventh = document.getElementById('7');
    seventh.onclick = function () {
      if (seventh.innerHTML == ''){
        if (turn == '1') {
          seventh.innerHTML = 'X';
          turn = '2';
          whosTurn(turn);

        } else {
          seventh.innerHTML = 'O';
          turn = '1';
          whosTurn(turn);

        }
      }
      if ((first.innerHTML == 'X' && fourth.innerHTML == 'X' && seventh.innerHTML == 'X')
        || (first.innerHTML == 'O' && fourth.innerHTML == 'O' && seventh.innerHTML == 'O')){
        document.getElementById('winner').innerHTML = "You win!";

      }
      else if((seventh.innerHTML == 'X' && fifth.innerHTML == 'X' && third.innerHTML == 'X')
        ||(seventh.innerHTML == 'O' && fifth.innerHTML == 'O' && third.innerHTML == 'O')){
        document.getElementById('winner').innerHTML = "You win!";

      }
      else if ((seventh.innerHTML == 'X' && eighth.innerHTML == 'X' && ninth.innerHTML == 'X')
         || (seventh.innerHTML == 'O' && eighth.innerHTML == 'O' && ninth.innerHTML == 'O')){
         document.getElementById('winner').innerHTML = "You win!";

      }
  }
var eighth = document.getElementById('8');
  eighth.onclick = function () {
    if (eighth.innerHTML == ''){
      if (turn == '1') {
        eighth.innerHTML = 'X';
        turn = '2';
        whosTurn(turn);

      } else {
        eighth.innerHTML = 'O';
        turn = '1';
        whosTurn(turn);

      }
    }
   if((fifth.innerHTML == 'X' && second.innerHTML == 'X' && eighth.innerHTML == 'X')
          ||(fifth.innerHTML == 'O' && second.innerHTML == 'O' && eighth.innerHTML == 'O')){
              document.getElementById('winner').innerHTML = "You win!";

    }
    else if ((seventh.innerHTML == 'X' && eighth.innerHTML == 'X' && ninth.innerHTML == 'X')
       || (seventh.innerHTML == 'O' && eighth.innerHTML == 'O' && ninth.innerHTML == 'O')){
       document.getElementById('winner').innerHTML = "You win!";

    }
  }
  var ninth = document.getElementById('9');
  ninth.onclick = function () {
    if (ninth.innerHTML == ''){
      if (turn == '1') {
        ninth.innerHTML = 'X';
        turn = '2';
        whosTurn(turn);

      } else {
        ninth.innerHTML = 'O';
        turn = '1';
        whosTurn(turn);

      }
    }
    if ((first.innerHTML == 'X' && fifth.innerHTML == 'X' && ninth.innerHTML == 'X')
      || (first.innerHTML == 'O' && fifth.innerHTML == 'O' && ninth.innerHTML == 'O')){
      document.getElementById('winner').innerHTML = "You win!";
    }
    else if((ninth.innerHTML == 'X' && sixth.innerHTML == 'X' && third.innerHTML == 'X')
      ||(ninth.innerHTML == 'O' && sixth.innerHTML == 'O' && third.innerHTML == 'O')){
      document.getElementById('winner').innerHTML = "You win!";

    }
    else if ((seventh.innerHTML == 'X' && eighth.innerHTML == 'X' && ninth.innerHTML == 'X')
       || (seventh.innerHTML == 'O' && eighth.innerHTML == 'O' && ninth.innerHTML == 'O')){
       document.getElementById('winner').innerHTML = "You win!";

    }
  }

  function whosTurn (turn) {
    if (turn == '1'){
      document.getElementById('pTurn').innerHTML = "Player X!";
    }
    else if (turn == '2'){
      document.getElementById('pTurn').innerHTML = "Player O!";
    }
  }
};
