window.onload = function () {
  var downloadButton = document.getElementById('genTableButton');
  var content = document.getElementById('content');
  var table;
  var topHeaders;
  var cells;
  var previous;
  var perviousValue;
  downloadButton.onclick = function () {
    $.get("student_data.csv", function (data){
      data = data.split('\n');
      var entireTable = document.createElement('table');
      var tableHeader = document.createElement('tr');
      var header1 = document.createElement('th');
      var header2 = document.createElement('th');
      var header3 = document.createElement('th');
      var header4 = document.createElement('th');
      header1.textContent = 'Student ID';
      header2.textContent = 'Asmt 1';
      header3.textContent = 'Asmt 2';
      header4.textContent = 'Asmt 3';
      tableHeader.appendChild(header1);
      tableHeader.appendChild(header2);
      tableHeader.appendChild(header3);
      tableHeader.appendChild(header4);
      entireTable.appendChild(tableHeader);
      for (var i = 0; i < data.length; i++) {
        data[i] = data[i].split(',');
        var row = document.createElement('tr');
        var rowHeader = document.createElement('th');
        rowHeader.textContent = data[i][0];
        row.appendChild(rowHeader);
        for (var j = 1; j < data[i].length; j++) {
          var tableCell = document.createElement('td');
          tableCell.textContent = data[i][j];
          row.appendChild(tableCell);
        }
        entireTable.appendChild(row);
      }
      content.appendChild(entireTable);
      table = document.getElementsByTagName("tr");
      topHeaders = table.item(0).getElementsByTagName("th");
      cells = document.getElementsByTagName("td");
      for (var i = 1; i < topHeaders.length; i++) {
        topHeaders.item(i).tabIndex = i;
        topHeaders.item(i).onclick = function () {
          clearCheck(event.target)
          for (var i = 1; i < table.length; i++) {
            var row = table.item(i).getElementsByTagName("td");
            var cell = row.item(event.target.tabIndex - 1);
            cellChange(cell);
          }
          previous = event.target;
        };
      }

      for (var i = 1; i < table.length; i++) {
        var rowHeaders = table.item(i).getElementsByTagName("th").item(0);
        rowHeaders.tabIndex = i;
        rowHeaders.onclick = function () {
          clearCheck(event.target);
          var row = table.item(event.target.tabIndex).getElementsByTagName("td");
          for (var i = 0; i < row.length; i++) {
            var cell = row.item(i);
            cellChange(cell);
          }
          previous = event.target;
        };
      }

      for (var i = 0; i < cells.length; i++) {
        cells.item(i).onclick = function () {
          var cell = event.target;
          if (event.target.tagName != "INPUT") {
            clearCheck(cell);
            cellChange(cell);
            var inputBox = cell.getElementsByTagName('input');
            if(cell.childElementCount == 0){
              var input = document.createElement('input');
              input.type = 'text';
              input.value = cell.textContent;
              cell.textContent = '';
              cell.appendChild(input);
              previousValue = input.value;
              input.focus();
              inputBox.item(0).onkeypress = function (e) {
                if (e.keyCode === 13) {
                  event.target.parentNode.className = '';
                  event.target.parentNode.textContent = event.target.value;
                }
              };
              inputBox.item(0).onblur = function () {
                event.target.parentNode.className = '';
                event.target.parentNode.textContent = previousValue;
              };
            }
          } else {
            previous = event.target;
          }
        };
      }
    });

    function clearCheck(newEvent) {
      if (previous != newEvent) {
        for (var i = 0; i < cells.length; i++) {
          cells.item(i).className = "";
        }
      }
    }

    function cellChange(cell) {
        if (cell.className == "") {
          cell.className = "selected";
        } else {
          cell.className = "";
        }
    }
  };
};
