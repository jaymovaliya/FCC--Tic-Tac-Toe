$(document).ready(function(){
  var user_sign;
  var com_sign;
  var over=false;
  var getClass = [".first",".second",".third",".fourth",".fifth",".sixth",".seventh",".eighth",".ninth"];
  $("#zero").click(function(){
    $("#ask-box").fadeOut();
    $("#new-board").removeClass("hidden");
    user_sign = 'O';
    com_sign = 'X';
    start_game();
  });
  $("#cross").click(function(){
    $("#ask-box").fadeOut();
    $("#new-board").removeClass("hidden");
    user_sign = 'X';
    com_sign = 'O';
    start_game();
  });
  $(".user").click(function(){
      console.log("clicked");
     $(this).html(user_sign);
  $(this).prop('onClick',null).off('click');
    check_result();
    if(over == true){
      return 0;
    }
    next_move();
 });
  function start_game(){
    var r = Math.floor((Math.random()*9));
  $(getClass[r]).html(com_sign);
  $(getClass[r]).prop('onClick',null).off('click');
}
  function next_move(){
    if(over == true){
      return 0;
    }
    var ind = 'NO';
    ind = myWinning();
    console.log("Got index");
    console.log(ind);
    if(ind != 'NO'){
      $(ind).html(com_sign);
      $(ind).prop('onClick',null).off('click');
      check_result();
    }
    else
      ind = oppLose();
    console.log("Got index");
    console.log(ind);
    if(ind != 'NO'){
      $(ind).html(com_sign);
      $(ind).prop('onClick',null).off('click');
      check_result();
    }
    else{
      do{
      var move_ind = Math.floor(Math.random()*9);
      console.log(move_ind);
      var cls = getClass[move_ind];
      console.log($(cls).text());
      }while($(cls).text() != '');
      var cs = getClass[move_ind];
      $(cs).html(com_sign);
      $(cs).prop('onClick',null).off('click');
      check_result();
    }
    }  
  function myWinning(){
    for(var i = 0; i<3; i+=3){
      if($(getClass[i]).text() == com_sign && $(getClass[i+1]).text() == com_sign){
        if($(getClass[i+2]).text() == '')
          return getClass[i+2];
    }
    }
    for(var i = 0; i<3; i+=3){
      if($(getClass[i+1]).text() == com_sign && $(getClass[i+2]).text() == com_sign){
        if($(getClass[i]).text() == '')
          return getClass[i];
      }
    }
    for(var i = 0; i<3; i+=3){
      if($(getClass[i]).text() == com_sign && $(getClass[i+2]).text() == com_sign){
        if($(getClass[i+1]).text() == '')
          return getClass[i+1];
      }
    }
    for(var i = 0; i<3; i+=1){
      if($(getClass[i]).text() == com_sign && $(getClass[i+3]).text() == com_sign){
        if($(getClass[i+6]).text() == '')
          return getClass[i+6];
      }
    }
    for(var i = 0; i<3; i+=1){
      if($(getClass[i+3]).text() == com_sign && $(getClass[i+6]).text() == com_sign){
        if($(getClass[i]).text() == '')
          return getClass[i];
      }
    }
    for(var i = 0; i<3; i+=1){
      if($(getClass[i]).text() == com_sign && $(getClass[i+6]).text() == com_sign){
        if($(getClass[i+3]).text() == '')
          return getClass[i+3];
      }
    }
    if($(".first").text() == com_sign && $(".fifth").text() == com_sign){
      if($(".ninth").text() == '')
        return ".ninth";
    }
    else if($(".first").text() == com_sign && $(".ninth").text() == com_sign){
      if($(".fifth").text() == '')
        return ".fifth";
    }
    else if($(".fifth").text() == com_sign && $(".ninth").text() == com_sign){
      if($(".first").text() == '')
        return ".first";
    }
    else if($(".third").text() == com_sign && $(".fifth").text() == com_sign){
      if($(".seventh").text() == '')
        return ".seventh";
    }
    else if($(".fifth").text() == com_sign && $(".seventh").text() == com_sign){
      if($(".third").text() == '')
        return ".third";
    }
    else if($(".third").text() == com_sign && $(".seventh").text() == com_sign){
      if($(".fifth").text() == '')
        return ".fifth";
    }
    else
      return 'NO';
  }
  function oppLose(){
    for(var i = 0; i<3; i+=3){
      if($(getClass[i]).text() == user_sign && $(getClass[i+1]).text() == user_sign){
        if($(getClass[i+2]).text() == '')
          return getClass[i+2];
      }
    }
    for(var i = 0; i<3; i+=3){
      if($(getClass[i+1]).text() == user_sign && $(getClass[i+2]).text() == user_sign){
        if($(getClass[i]).text() == '')
          return getClass[i];
      }
    }
    for(var i = 0; i<3; i+=3){
      if($(getClass[i]).text() == user_sign && $(getClass[i+2]).text() == user_sign){
        if($(getClass[i+1]).text() == '')
          return getClass[i+1];
      }
    }
    for(var i = 0; i<3; i+=1){
      if($(getClass[i]).text() == user_sign && $(getClass[i+3]).text() == user_sign){
        if($(getClass[i+6]).text() == '')
          return getClass[i+6];
      }
    }
    for(var i = 0; i<3; i+=1){
      if($(getClass[i+3]).text() == user_sign && $(getClass[i+6]).text() == user_sign){
        if($(getClass[i]).text() == '')
          return getClass[i];
      }
    }
    for(var i = 0; i<3; i+=1){
      if($(getClass[i]).text() == user_sign && $(getClass[i+6]).text() == user_sign){
        if($(getClass[i+3]).text() == '')
          return getClass[i+3];
      }
    }
    if($(".first").text() == user_sign && $(".fifth").text() == user_sign){
      if($(".ninth").text() == '')
        return ".ninth";
    }
    else if($(".first").text() == user_sign && $(".ninth").text() == user_sign){
      if($(".fifth").text() == '')
        return ".fifth";
    }
    else if($(".fifth").text() == user_sign && $(".ninth").text() == user_sign){
      if($(".first").text() == '')
        return ".first";
    }
    else if($(".third").text() == user_sign && $(".fifth").text() == user_sign){
      if($(".seventh").text() == '')
        return ".seventh";
    }
    else if($(".fifth").text() == user_sign && $(".seventh").text() == user_sign){
      if($(".third").text() == '')
        return ".third";
    }
    else if($(".third").text() == user_sign && $(".seventh").text() == user_sign){
      if($(".fifth").text() == '')
        return ".fifth";
    }
    else
      return 'NO';
  }
  function check_result(){
    var flag = 0;
    for(var i in getClass){
      if($(getClass[i]).text() == ''){
        flag=1;
      }
    }
      if(flag == 0){
        $("#result").removeClass("hidden");
        $("#result").html("Match Tied!!");
        var time = 3;
      setInterval(function(){
        show_time(time);
        time-=1;
      },1000);
        //location.reload(true);
      }
    console.log("checked result");
    if(($(".first").text() == 'O' && $(".second").text() == 'O') && ($(".second").text() == 'O' && $(".third").text() == 'O')){
      console.log("1 satisfied");
      stop_game('O');
    }
    else if(($(".first").text() == 'X' && $(".second").text() == 'X') && ($(".second").text() == 'X' && $(".third").text() == 'X')){
      console.log("2 satisfied");
      stop_game('X');
    }
    else if(($(".fourth").text() == 'O' && $(".fifth").text() == 'O') && ($(".fifth").text() == 'O' && $(".sixth").text() == 'O')){
      console.log("3 satisfied");
      stop_game('O');
    }
    else if(($(".fourth").text() == 'X' && $(".fifth").text() == 'X') && ($(".fifth").text() == 'X' && $(".sixth").text() == 'X')){
      console.log("4 satisfied");
      stop_game('X');
    }
    else if(($(".seventh").text() == 'O' && $(".eighth").text() == 'O') && ($(".eighth").text() == 'O' && $(".ninth").text() == 'O')){
      console.log("5 satisfied");
      stop_game('O');
    }
    else if(($(".seventh").text() == 'X' && $(".eighth").text() == 'X') && ($(".eighth").text() == 'X' && $(".ninth").text() == 'X')){
      console.log("6 satisfied");
      stop_game('X');
    }
    else if(($(".first").text() == 'O' && $(".fourth").text() == 'O') && ($(".fourth").text() == 'O' && $(".seventh").text() == 'O')){
      console.log("7 satisfied");
      stop_game('O');
    }
    else if(($(".first").text() == 'X' && $(".fourth").text() == 'X') && ($(".fourth").text() == 'X' && $(".seventh").text() == 'X')){
      console.log("8 satisfied");
      stop_game('X');
    }
    else if(($(".second").text() == 'O' && $(".fifth").text() == 'O') && ($(".fifth").text() == 'O' && $(".eighth").text() == 'O')){
      console.log("9 satisfied");
      stop_game('O');
    }
    else if(($(".second").text() == 'X' && $(".fifth").text() == 'X') && ($(".fifth").text() == 'X' && $(".eighth").text() == 'X')){
      console.log("10 satisfied");
      stop_game('X');
    }
    else if(($(".third").text() == 'O' && $(".sixth").text() == 'O') && ($(".sixth").text() == 'O' && $(".ninth").text() == 'O')){
      console.log("11 satisfied");
      stop_game('O');
    }
    else if(($(".third").text() == 'X' && $(".sixth").text() == 'X') && ($(".sixth").text() == 'X' && $(".ninth").text() == 'X')){
      console.log("12 satisfied");
      stop_game('X');
    }
    else if(($(".first").text() == 'O' && $(".fifth").text() == 'O') && ($(".fifth").text() == 'O' && $(".ninth").text() == 'O')){
      console.log("13 satisfied");
      stop_game('O');
    }
    else if(($(".first").text() == 'X' && $(".fifth").text() == 'X') && ($(".fifth").text() == 'X' && $(".ninth").text() == 'X')){
      console.log("14 satisfied");
      stop_game('X');
    }
    else if(($(".third").text() == 'O' && $(".fifth").text() == 'O') && ($(".fifth").text() == 'O' && $(".seventh").text() == 'O')){
      console.log("15 satisfied");
      stop_game('O');
    }
    else if(($(".third").text() == 'X' && $(".fifth").text() == 'X') && ($(".fifth").text() == 'X' && $(".seventh").text() == 'X')){
      console.log("16 satisfied");
      stop_game('X');
    }
    else{
      console.log("No satisfied");
    }
  }
  function stop_game(c){
    if(c == com_sign){
    $("#result").removeClass("hidden");
      $("#result").html('Computer Win!!');
      over = true;
      var time = 3;
      setInterval(function(){
        show_time(time);
        time-=1;
      },1000);
      //location.reload(true);
    }
    else if(c == user_sign){
    $("#result").removeClass("hidden");
      $("#result").html('You Win!!');
      over = true;
      var time = 3;
      setInterval(function(){
        show_time(time);
        time-=1;
      },1000);
      //location.reload(true);
    }
  }
  function show_time(t){
    if(t==1){
      location = location;
    }
    $("#time").removeClass("hidden");
    $("#time").html('Restarting in '+t+' seconds..');
  }
});
