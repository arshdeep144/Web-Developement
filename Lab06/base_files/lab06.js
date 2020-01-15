$(document).ready(function () {
  $('td').toggleClass('selected');
  var value;
  var previous = $(this);
  $('td').click(function() {

    if ($(this).has('input').length) {
      return;
    }

    value = $(this).text();

    if (!$(this).is(previous)) {
      $('td').removeClass('selected');
    }

    $(this).toggleClass('selected');

    $(this).html('<input type=\'text\'></input>');

    $('input').val(value);

    $('input').focus();

    $('input').keypress(function (e) {
      if (e.which == '13') {
        $(this).parent().text($(this).val());
        $('td').removeClass('selected');
        $(this).remove();
      }
    });

    $('input').focusout(function () {
      $(this).parent().text(value);
      $('td').removeClass('selected');
      $(this).remove();
    });

    previous = $(this);

  });

  $('th').click(function () {

    if (!$(this).is(previous)) {

      $('td').removeClass('selected');
    }

    if ($(this).siblings('td').length != 0) {
      $(this).siblings().toggleClass('selected');
    } else {
      var index = $(this).index();
      index++;
      $("tr td:nth-child("+index+")").toggleClass('selected');
    }

    previous = $(this);

  });
});
