
function showlist(){
  document.getElementById('informmessage').style.display='block';
  setTimeout(function() {document.getElementById('informmessage').style.display='none'}, 1500);
}

function addline(){
  var objective = document.getElementById('object').;
  console.log(objective);
  document.getElementById('list').innerHTML += objective + "<br>";
}
