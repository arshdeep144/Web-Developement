$(document).ready(function () {
  $('#updateForm').submit(function () {
    return false;  // do not submit the form
  });

  $('#grades tr').click(rowClick);

  $('#update').click(function () {
    var rowId = $('#updateRow').val();
    console.log('rowId', rowId);
    $('#'+rowId).replaceWith(getRowValues(rowId));
  });

  $('#add').click(function () {
    numRows++;
    $('#grades tbody').append(getRowValues('new'));
  });
});

var numRows = 3;
function getRowValues(rowId) {
  if (rowId == 'new') {
    rowId = 'row' + numRows;
  }

  var sid = $('#sid').val();
  var firstName = $('#firstName').val();
  var lastName = $('#lastName').val();
  var grade = $('#grade').val();

  var tr = $('<tr />');
  tr.attr('id', rowId);
  var td1 = $('<td />');
  td1.text(sid);
  tr.append(td1);
  var td2 = $('<td />');
  td2.text(firstName);
  tr.append(td2);
  var td3 = $('<td />');
  td3.text(lastName);
  tr.append(td3);
  var td4 = $('<td />');
  td4.text(grade);
  tr.append(td4);
  tr.click(rowClick);
  return tr;
}

function rowClick() {
  var id = $(this).attr('id');
  console.log('selected row with id:', id);

  // populate the update form with the values from this row
  var cells = $(this).find('td');
  $('#updateRow').val(id);
  $('#sid').val($(cells[0]).text());
  $('#firstName').val($(cells[1]).text());
  $('#lastName').val($(cells[2]).text());
  $('#grade').val($(cells[3]).text());
}
