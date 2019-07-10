
function test1(){
  alert("실습 버튼을 클릭하셨습니다");
}
function test2(){
  var date = new Date();
  var hour = date.getHours();

  if(hour < 12){
    alert("오전입니다");
  }else if(hour >= 20){
    alert("밤입니다");
  }else{
    alert("저녁입니다");
  }
}

function test3(){
  var lis = document.getElementsByTagName('li');
  for(var i = 0; i<lis.length; i++){
    lis[i].style.color='red';
  }


}

function test4(){
  var lis = document.getElementsByClassName('group');
  for(var i = 0; i<lis.length; i++){
    lis[i].style.color='rgb(2, 240, 21)';
  }
}

function test5(){
  var lis = document.getElementById('li1');
  lis.style.color='rgb(251, 10, 242)';

  var lis = document.getElementById('li2');
  lis.style.color='rgb(1, 217, 255)';

  var lis = document.getElementById('li3');
  lis.style.color='rgb(244, 199, 86)';

  var lis = document.getElementById('li4');
  lis.style.color='rgb(204, 0, 255)';

  var lis = document.getElementById('li5');
  lis.style.color='rgb(81, 233, 43)';
}


window.onload = function(){


  $(".navul").on("mouseenter", function(){
    $(".slide").show();

    $("nav").on("mouseleave", function(){
      $(".slide").hide();
    });

  });

}
