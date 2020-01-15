var count = 0;
function show(){
  if(count%2==0){
    document.getElementById('chatPopup').style.display='inherit';
    count++;
  }
  else{
      document.getElementById('chatPopup').style.display='none';
      count++;
  }
}
function addMessage(e) {
  if(e.keyCode == 13){
    var messageField = document.getElementById('messageField');
    var newMessage = messageField.value;
    var messages = document.getElementById('messages');

    var content = document.createTextNode("You: " + newMessage);
    var newDivItem = document.createElement('div');
    newDivItem.appendChild(content);
    messages.appendChild(newDivItem);
    return false;
  }
  else{
    return true;  
  }
}
