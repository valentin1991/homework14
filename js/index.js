
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



;(function($,undefined){
  var j = 1;
  let objectivejQuery = '';

    $("button.addlinejQuery").on('click',function(){
      $("#informmessagejquery").show();
      setTimeout(function () {
        $("#informmessagejquery").hide();
      }, 1500)
      objectivejQuery +="Задание"+ j + ": " +  $("#objectjQuery").val() + "<br>";
      j += 1;
    })

    $("button.showlistjQuery").on('click',function(){
      $("#listjquery").show();
      $("#listjquery").html(objectivejQuery);
    })
})(jQuery)
