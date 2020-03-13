
let i = 1;
let objective = '';


function addline(){
  document.getElementById('informmessage').style.display='block';
  setTimeout(function() {document.getElementById('informmessage').style.display='none'}, 1500);

  objective += "Задание"+ i + ": " + document.getElementById('object').value + "<br>";
  i += 1;
}

function showlist(){
  document.getElementById('list').style.display='block';
  document.getElementById('list').innerHTML = objective;

}
