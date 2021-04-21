var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
while((user_hand !="グー")&&(user_hand !="チョキ")&&(user_hand !="パー")&&(user_hand !=null)){
  alert('グー・チョキ・パーのいずれかを入力して下さい');
  user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
}
var js_hand = getJShand();
var judge = winLoss(user_hand, js_hand);

if (user_hand != null){
alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。')
} else {
  alert("またチャレンジしてね")
}

function getJShand(){
  var js_hand_num = Math.floor(Math.random() * 3 );

  if(js_hand_num == 0){
    hand_name = "グー";
  } else if(js_hand_num == 1) {
    hand_name = "チョキ";
  } else if(js_hand_num == 2) {
    hand_name = "パー";
  }

  return hand_name;
}

function winLoss(user, js){
  var winLossStr;

  if(user =="グー"){
    if(js =="グー"){
      winLossStr = "あいこ";
    }else if(js =="チョキ"){
      winLossStr = "勝ち";
    }else if(js =="パー"){
      winLossStr ="負け";
    }
  } else if(user =="チョキ"){
    if(js =="グー"){
      winLossStr ="負け";
    }else if(js =="チョキ"){
      winLossStr ="あいこ";
    }else if(js =="パー"){
      winLossStr ="勝ち";
    }
  } else if(user =="パー"){
    if(js =="グー"){
      winLossStr ="勝ち";
    }else if(js =="チョキ"){
      winLossStr ="負け";
    }else if(js ="パー"){
      winLossStr ="あいこ";
    }
  }

  return winLossStr;
}